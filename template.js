import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, syntaxHighlighting} from '@codemirror/language'
import {tags as t} from '@lezer/highlight'

export const config = {
  name: '{{.ExportPrefix}}',
  dark: {{.Dark}},
  background: '{{.Background.Color}}',
  foreground: '{{.Foreground.Color}}',
  selection: '{{.Selection.Color}}',
  cursor: '{{.Cursor.Color}}',
  dropdownBackground: '{{.DropdownBackground.Color}}',
  dropdownBorder: '{{.DropdownBorder.Color}}',
  activeLine: '{{.ActiveLine.Color}}',
  matchingBracket: '{{.MatchingBracket.Color}}',
  keyword: '{{.Keyword.Color}}',
  storage: '{{.Storage.Color}}',
  variable: '{{.Variable.Color}}',
  parameter: '{{.Parameter.Color}}',
  function: '{{.Function.Color}}',
  string: '{{.String.Color}}',
  constant: '{{.Constant.Color}}',
  type: '{{.Type.Color}}',
  class: '{{.Class.Color}}',
  number: '{{.Number.Color}}',
  comment: '{{.Comment.Color}}',
  heading: '{{.Heading.Color}}',
  invalid: '{{.Invalid.Color}}',
  regexp: '{{.Regexp.Color}}',
}

export const {{.ExportPrefix}}Theme = EditorView.theme({
  '&': {
    color: config.foreground,
    backgroundColor: config.background,
  },

  '.cm-content': {caretColor: config.cursor},

  '&.cm-focused .cm-cursor': {borderLeftColor: config.cursor},
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, & ::selection': {backgroundColor: config.selection},

  '.cm-panels': {backgroundColor: config.dropdownBackground, color: config.foreground},
  '.cm-panels.cm-panels-top': {borderBottom: '2px solid black'},
  '.cm-panels.cm-panels-bottom': {borderTop: '2px solid black'},

  '.cm-searchMatch': {
    backgroundColor: config.dropdownBackground,
    outline: `1px solid ${config.dropdownBorder}`
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: config.selection
  },

  '.cm-activeLine': {backgroundColor: config.activeLine},
  '.cm-selectionMatch': {backgroundColor: config.selection},

  '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
    backgroundColor: config.matchingBracket,
    outline: 'none'
  },

  '.cm-gutters': {
    backgroundColor: config.background,
    color: config.foreground,
    border: 'none'
  },
  '.cm-activeLineGutter': {backgroundColor: config.background},

  '.cm-foldPlaceholder': {
    backgroundColor: 'transparent',
    border: 'none',
    color: config.foreground
  },

  '.cm-tooltip': {
    border: `1px solid ${config.dropdownBorder}`,
    backgroundColor: config.dropdownBackground,
    color: config.foreground
  },
  '.cm-tooltip .cm-tooltip-arrow:before': {
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  '.cm-tooltip .cm-tooltip-arrow:after': {
    borderTopColor: config.foreground,
    borderBottomColor: config.foreground,
  },
  '.cm-tooltip.cm-tooltip-autocomplete': {
    '& > ul > li[aria-selected]': {
      background: config.selection,
      color: config.foreground
    }
  },
}, {dark: config.dark})

export const {{.ExportPrefix}}HighlightStyle = HighlightStyle.define([
  {tag: t.keyword, color: config.keyword},{{/* const, let, function, if */}}
  {tag: [t.name, t.deleted, t.character, t.macroName], color: config.variable},{{/* btn, document */}}
  {tag: [t.propertyName], color: config.function},{{/* getElementById */}}
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: config.string},{{/* "string" */}}
  {tag: [t.function(t.variableName), t.labelName], color: config.function},{{/* render */}}
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: config.constant},{{/* ??? */}}
  {tag: [t.definition(t.name), t.separator], color: config.variable},{{/* btn, count, fn render() */}}
  {tag: [t.className], color: config.class},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: config.number},
  {tag: [t.typeName], color: config.type, fontStyle: config.type},
  {tag: [t.operator, t.operatorKeyword], color: config.keyword},
  {tag: [t.url, t.escape, t.regexp, t.link], color: config.regexp},
  {tag: [t.meta, t.comment], color: config.comment},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: config.heading},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: config.variable},
  {tag: t.invalid, color: config.invalid},
  {tag: t.strikethrough, textDecoration: 'line-through'},
])

export const {{.ExportPrefix}}: Extension = [
  {{.ExportPrefix}}Theme,
  syntaxHighlighting({{.ExportPrefix}}HighlightStyle),
]
