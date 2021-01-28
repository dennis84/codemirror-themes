import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const {{.ExportPrefix}}Theme = EditorView.theme({
  $: {
    color: '{{.Foreground}}',
    backgroundColor: '{{.Background}}',
    '& ::selection': {backgroundColor: '{{.Selection}}'},
    caretColor: '{{.Cursor}}',
  },

  '$$focused $cursor': {borderLeftColor: '{{.Cursor}}'},
  '$$focused $selectionBackground': {backgroundColor: '{{.Selection}}'},

  $panels: {backgroundColor: '{{.DropdownBackground}}', color: '{{.Foreground}}'},
  '$panels.top': {borderBottom: '2px solid black'},
  '$panels.bottom': {borderTop: '2px solid black'},

  $searchMatch: {
    backgroundColor: '{{.DropdownBackground}}',
    outline: `1px solid {{.DropdownBorder}}`
  },
  '$searchMatch.selected': {
    backgroundColor: '{{.Selection}}'
  },

  $activeLine: {backgroundColor: '{{.Selection}}'},
  $selectionMatch: {backgroundColor: '{{.Selection}}'},

  '$matchingBracket, $nonmatchingBracket': {
    backgroundColor: '{{.Invalid}}',
    outline: 'none'
  },
  $gutters: {
    backgroundColor: '{{.Background}}',
    color: '{{.Foreground}}',
    border: 'none'
  },
  '$gutterElement.lineNumber': {color: 'inherit'},

  $foldPlaceholder: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '{{.Foreground}}'
  },

  $tooltip: {
    border: '1px solid {{.DropdownBorder}}',
    backgroundColor: '{{.DropdownBackground}}'
  },
  '$tooltip.autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '{{.Selection}}',
      color: '{{.Foreground}}'
    }
  }
}, {dark: true})

export const {{.ExportPrefix}}HighlightStyle = HighlightStyle.define(
  {tag: t.keyword, color: '{{.Keyword}}'},
  {tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: '{{.Function}}'},
  {tag: [t.processingInstruction, t.string, t.inserted], color: '{{.String}}'},
  {tag: [t.function(t.variableName), t.labelName], color: '{{.Function}}'},
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '{{.Constant}}'},
  {tag: [t.definition(t.name), t.separator], color: '{{.Function}}'},
  {tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '{{.Class}}'},
  {tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: '{{.Regexp}}'},
  {tag: [t.meta, t.comment], color: '{{.Comment}}'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, color: '{{.Keyword}}', textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '{{.Heading}}'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '{{.Variable}}'},
  {tag: t.invalid, color: '{{.Invalid}}'},
)

export const {{.ExportPrefix}}: Extension = [
  {{.ExportPrefix}}Theme,
  {{.ExportPrefix}}HighlightStyle,
]
