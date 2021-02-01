import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const materialDarkTheme = EditorView.theme({
  $: {
    color: '#EEFFFF',
    backgroundColor: '#263238',
    '& ::selection': {backgroundColor: '#80CBC420'},
    caretColor: '#FFCC00',
  },

  '$$focused $cursor': {borderLeftColor: '#FFCC00'},
  '$$focused $selectionBackground': {backgroundColor: '#80CBC420'},

  $panels: {backgroundColor: '#263238', color: '#EEFFFF'},
  '$panels.top': {borderBottom: '2px solid black'},
  '$panels.bottom': {borderTop: '2px solid black'},

  $searchMatch: {
    backgroundColor: '#263238',
    outline: `1px solid #FFFFFF10`
  },
  '$searchMatch.selected': {
    backgroundColor: '#80CBC420'
  },

  $activeLine: {backgroundColor: '#80CBC420'},
  $selectionMatch: {backgroundColor: '#80CBC420'},

  '$matchingBracket, $nonmatchingBracket': {
    backgroundColor: '#f0717870',
    outline: 'none'
  },
  $gutters: {
    backgroundColor: '#263238',
    color: '#EEFFFF',
    border: 'none'
  },
  '$gutterElement.lineNumber': {color: 'inherit'},

  $foldPlaceholder: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#EEFFFF'
  },

  $tooltip: {
    border: '1px solid #FFFFFF10',
    backgroundColor: '#263238'
  },
  '$tooltip.autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#80CBC420',
      color: '#EEFFFF'
    }
  }
}, {dark: true})

export const materialDarkHighlightStyle = HighlightStyle.define(
  // const, let, function, if
  {tag: t.keyword, color: '#89DDFF'},
  // document
  {tag: [t.name, t.deleted, t.character, t.macroName], color: '#EEFFFF'},
  // getElementById
  {tag: [t.propertyName], color: '#82AAFF'},
  // "string"
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#C3E88D'},
  // render
  {tag: [t.function(t.variableName), t.labelName], color: '#82AAFF'},
  // ???
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#89DDFF'},
  // btn, count, fn render()
  {tag: [t.definition(t.name), t.separator], color: '#EEFFFF'},
  {tag: [t.className], color: '#FFCB6B'},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#F78C6C'},
  {tag: [t.typeName], color: '#FFCB6B', fontStyle: ''},
  {tag: [t.operator, t.operatorKeyword], color: '#89DDFF'},
  {tag: [t.url, t.escape, t.regexp, t.link], color: '#C3E88D'},
  {tag: [t.meta, t.comment], color: '#546E7A'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#89DDFF'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#EEFFFF'},
  {tag: t.invalid, color: '#f0717870'},
)

export const materialDark: Extension = [
  materialDarkTheme,
  materialDarkHighlightStyle,
]
