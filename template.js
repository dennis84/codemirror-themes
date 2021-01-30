import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const {{.ExportPrefix}}Theme = EditorView.theme({
  $: {
    color: '{{.Foreground.Color}}',
    backgroundColor: '{{.Background.Color}}',
    '& ::selection': {backgroundColor: '{{.Selection.Color}}'},
    caretColor: '{{.Cursor.Color}}',
  },

  '$$focused $cursor': {borderLeftColor: '{{.Cursor.Color}}'},
  '$$focused $selectionBackground': {backgroundColor: '{{.Selection.Color}}'},

  $panels: {backgroundColor: '{{.DropdownBackground.Color}}', color: '{{.Foreground.Color}}'},
  '$panels.top': {borderBottom: '2px solid black'},
  '$panels.bottom': {borderTop: '2px solid black'},

  $searchMatch: {
    backgroundColor: '{{.DropdownBackground.Color}}',
    outline: `1px solid {{.DropdownBorder.Color}}`
  },
  '$searchMatch.selected': {
    backgroundColor: '{{.Selection.Color}}'
  },

  $activeLine: {backgroundColor: '{{.Selection.Color}}'},
  $selectionMatch: {backgroundColor: '{{.Selection.Color}}'},

  '$matchingBracket, $nonmatchingBracket': {
    backgroundColor: '{{.Invalid.Color}}',
    outline: 'none'
  },
  $gutters: {
    backgroundColor: '{{.Background.Color}}',
    color: '{{.Foreground.Color}}',
    border: 'none'
  },
  '$gutterElement.lineNumber': {color: 'inherit'},

  $foldPlaceholder: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '{{.Foreground.Color}}'
  },

  $tooltip: {
    border: '1px solid {{.DropdownBorder.Color}}',
    backgroundColor: '{{.DropdownBackground.Color}}'
  },
  '$tooltip.autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '{{.Selection.Color}}',
      color: '{{.Foreground.Color}}'
    }
  }
}, {dark: {{.Dark}}})

export const {{.ExportPrefix}}HighlightStyle = HighlightStyle.define(
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
)

export const {{.ExportPrefix}}: Extension = [
  {{.ExportPrefix}}Theme,
  {{.ExportPrefix}}HighlightStyle,
]
