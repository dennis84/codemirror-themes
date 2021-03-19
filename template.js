import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const {{.ExportPrefix}}Theme = EditorView.theme({
  '&': {
    color: '{{.Foreground.Color}}',
    backgroundColor: '{{.Background.Color}}',
    '& ::selection': {backgroundColor: '{{.Selection.Color}}'},
    caretColor: '{{.Cursor.Color}}',
  },

  '&.cm-focused .cm-cursor': {borderLeftColor: '{{.Cursor.Color}}'},
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {backgroundColor: '{{.Selection.Color}}'},

  '.cm-panels': {backgroundColor: '{{.DropdownBackground.Color}}', color: '{{.Foreground.Color}}'},
  '.cm-panels.cm-panels-top': {borderBottom: '2px solid black'},
  '.cm-panels.cm-panels-bottom': {borderTop: '2px solid black'},

  '.cm-searchMatch': {
    backgroundColor: '{{.DropdownBackground.Color}}',
    outline: `1px solid {{.DropdownBorder.Color}}`
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: '{{.Selection.Color}}'
  },

  '.cm-activeLine': {backgroundColor: '{{.Selection.Color}}'},
  '.cm-selectionMatch': {backgroundColor: '{{.Selection.Color}}'},

  '.cm-matchingBracket, .cm-nonmatchingBracket': {
    backgroundColor: '{{.Invalid.Color}}',
    outline: 'none'
  },
  '.cm-gutters': {
    backgroundColor: '{{.Background.Color}}',
    color: '{{.Foreground.Color}}',
    border: 'none'
  },
  '.cm-lineNumbers, .cm-gutterElement': {color: 'inherit'},

  '.cm-foldPlaceholder': {
    backgroundColor: 'transparent',
    border: 'none',
    color: '{{.Foreground.Color}}'
  },

  '.cm-tooltip': {
    border: '1px solid {{.DropdownBorder.Color}}',
    backgroundColor: '{{.DropdownBackground.Color}}'
  },
  '.cm-tooltip-autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '{{.Selection.Color}}',
      color: '{{.Foreground.Color}}'
    }
  }
}, {dark: {{.Dark}}})

export const {{.ExportPrefix}}HighlightStyle = HighlightStyle.define([
  // const, let, function, if
  {tag: t.keyword, color: '{{.Keyword.Color}}'},
  // document
  {tag: [t.name, t.deleted, t.character, t.macroName], color: '{{.Variable.Color}}'},
  // getElementById
  {tag: [t.propertyName], color: '{{.Function.Color}}'},
  // "string"
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '{{.String.Color}}'},
  // render
  {tag: [t.function(t.variableName), t.labelName], color: '{{.Function.Color}}'},
  // ???
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '{{.Constant.Color}}'},
  // btn, count, fn render()
  {tag: [t.definition(t.name), t.separator], color: '{{.Variable.Color}}'},
  {tag: [t.className], color: '{{.Class.Color}}'},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '{{.Number.Color}}'},
  {tag: [t.typeName], color: '{{.Type.Color}}', fontStyle: '{{.Type.FontStyle}}'},
  {tag: [t.operator, t.operatorKeyword], color: '{{.Keyword.Color}}'},
  {tag: [t.url, t.escape, t.regexp, t.link], color: '{{.Regexp.Color}}'},
  {tag: [t.meta, t.comment], color: '{{.Comment.Color}}'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '{{.Heading.Color}}'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '{{.Variable.Color}}'},
  {tag: t.invalid, color: '{{.Invalid.Color}}'},
])

export const {{.ExportPrefix}}: Extension = [
  {{.ExportPrefix}}Theme,
  {{.ExportPrefix}}HighlightStyle,
]
