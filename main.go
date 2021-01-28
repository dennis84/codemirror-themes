package main

import (
  "fmt"
  "log"
  "os"
  "io"
  "strings"
  "text/template"
  "net/http"
  "archive/zip"
  "io/ioutil"
  "encoding/json"
)

type Theme struct {
  Name string
  Url string
  File string
}

func main() {
  themes := []Theme{
    {
      Name: "dracula",
      Url: "https://marketplace.visualstudio.com/_apis/public/gallery/publishers/dracula-theme/vsextensions/theme-dracula/2.22.3/vspackage",
      File: "extension/theme/dracula.json",
    },
    {
      Name: "solarized-light",
      Url: "https://marketplace.visualstudio.com/_apis/public/gallery/publishers/ryanolsonx/vsextensions/solarized/2.0.3/vspackage",
      File: "extension/themes/light-color-theme.json",
    },
    {
      Name: "solarized-dark",
      Url: "https://marketplace.visualstudio.com/_apis/public/gallery/publishers/ryanolsonx/vsextensions/solarized/2.0.3/vspackage",
      File: "extension/themes/dark-color-theme.json",
    },
  }

  for _, theme := range themes {
    fmt.Println("Process theme: ", theme.Name)
    if _, err := os.Stat("./tmp/" + theme.Name + ".zip"); os.IsNotExist(err) {
      fmt.Println("  Download theme")
      downloadTheme(theme)
    }

    fmt.Println("  Extract theme")
    content, err := extractTheme(theme)
    if err != nil {
      log.Fatal(err)
    }

    fmt.Println("  Generate template")
    generateTheme(theme, content)
  }
}

func generateTheme(theme Theme, content []byte) {
  params := makeTemplateParams(theme, content)

  t, err := template.ParseFiles("./template.js")
  if err != nil {
    log.Fatal(err)
  }

  out, err := os.Create("./themes/" + theme.Name + ".ts")
  if err != nil {
    log.Fatal(err)
  }

  err = t.Execute(out, params)
  if err != nil {
    log.Fatal(err)
  }

  out.Close()
}

type TokenColorSettings struct{
  Foreground string
}

type TokenColor struct{
  Scope interface{}
  Settings TokenColorSettings
}

type VsCodeTheme struct{
  Colors map[string]string
  TokenColors []TokenColor
}

func findTokenColor(data VsCodeTheme, scopes ...string) TokenColorSettings {
  for _, scope := range scopes {
    for _, tokenColor := range data.TokenColors {
      if s, ok := tokenColor.Scope.(interface{}); ok {
        if s == scope {
          return tokenColor.Settings
        }
      }

      if scopes, ok := tokenColor.Scope.([]interface{}); ok {
        for _, s := range scopes {
          if s == scope {
            return tokenColor.Settings
          }
        }
      }
    }
  }

  panic(fmt.Sprintf("Could not find tokenColor by scopes: %s", scopes))
}

func getColor(data VsCodeTheme, key string) string {
  return data.Colors[key]
}

type TemplateParams struct {
  ExportPrefix string
  Background string
  Foreground string
  Selection string
  Cursor string
  DropdownBackground string
  DropdownBorder string
  // Syntax
  Keyword string
  Function string
  Variable string
  String string
  Constant string
  Class string
  Comment string
  Heading string
  Invalid string
  Regexp string
}

func makeTemplateParams(theme Theme, content []byte) TemplateParams {
  var data VsCodeTheme //map[string]interface{}
  err := json.Unmarshal(content, &data)

  if err != nil {
    log.Fatal(err)
  }

  params := TemplateParams{
    ExportPrefix:       kebabToCamelCase(theme.Name),
    // Layout
    Background:         getColor(data, "editor.background"),
    Foreground:         getColor(data, "input.foreground"),
    Selection:          getColor(data, "editor.selectionBackground"),
    Cursor:             getColor(data, "editorCursor.foreground"), // TODO
    DropdownBackground: getColor(data, "dropdown.background"),
    DropdownBorder:     getColor(data, "dropdown.border"),
    // Syntax
    Keyword:            findTokenColor(data, "keyword").Foreground,
    Function:           findTokenColor(data, "entity.name.function").Foreground,
    Variable:           findTokenColor(data, "variable.parameter").Foreground,
    String:             findTokenColor(data, "string").Foreground,
    Constant:           findTokenColor(data, "constant", "constant.character").Foreground,
    Class:              findTokenColor(data, "entity.name.class").Foreground,
    Comment:            findTokenColor(data, "comment").Foreground,
    Heading:            findTokenColor(data, "markup.heading").Foreground,
    Invalid:            findTokenColor(data, "invalid").Foreground,
    Regexp:             findTokenColor(data, "string.regexp").Foreground,
  }

  return params
}

func extractTheme(theme Theme) ([]byte, error) {
  r, err := zip.OpenReader("tmp/" + theme.Name + ".zip")

  if err != nil {
    log.Fatal(err)
  }

  defer r.Close()

  for _, f := range r.File {
    if f.Name != theme.File {
      continue
    }

    rc, err := f.Open()
    if err != nil {
      log.Fatal(err)
    }

    content, err := ioutil.ReadAll(rc)
    if err != nil {
      log.Fatal(err)
    }

    rc.Close()

    return content, nil
  }

  return nil, fmt.Errorf("Cound not find file %s in extension", theme.File)
}

func downloadTheme(theme Theme) {
  resp, err := http.Get(theme.Url)
  if err != nil {
    log.Fatal(err)
  }

  defer resp.Body.Close()
  if resp.StatusCode != 200 {
    log.Fatal("Could not download theme: ", theme, "StatusCode: ", resp.StatusCode)
  }

  // Create the file
  out, err := os.Create("tmp/" + theme.Name + ".zip")
  if err != nil {
    log.Fatal(err)
  }

  defer out.Close()

  _, err = io.Copy(out, resp.Body)

  if err != nil {
    log.Fatal(err)
  }
}

func kebabToCamelCase(kebab string) (camelCase string) {
  isToUpper := false
  for _, runeValue := range kebab {
    if isToUpper {
      camelCase += strings.ToUpper(string(runeValue))
      isToUpper = false
    } else {
      if runeValue == '-' {
        isToUpper = true
      } else {
        camelCase += string(runeValue)
      }
    }
  }
  return
}
