import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const solarizedDarkTheme = EditorView.theme({
  $: {
    color: '#93a1a1',
    backgroundColor: '#002b36',
    '& ::selection': {backgroundColor: '#073642'},
    caretColor: '#839496',
  },

  '$$focused $cursor': {borderLeftColor: '#839496'},
  '$$focused $selectionBackground': {backgroundColor: '#073642'},

  $panels: {backgroundColor: '#00212b', color: '#93a1a1'},
  '$panels.top': {borderBottom: '2px solid black'},
  '$panels.bottom': {borderTop: '2px solid black'},

  $searchMatch: {
    backgroundColor: '#00212b',
    outline: `1px solid #2aa19899`
  },
  '$searchMatch.selected': {
    backgroundColor: '#073642'
  },

  $activeLine: {backgroundColor: '#073642'},
  $selectionMatch: {backgroundColor: '#073642'},

  '$matchingBracket, $nonmatchingBracket': {
    backgroundColor: '',
    outline: 'none'
  },
  $gutters: {
    backgroundColor: '#002b36',
    color: '#93a1a1',
    border: 'none'
  },
  '$gutterElement.lineNumber': {color: 'inherit'},

  $foldPlaceholder: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#93a1a1'
  },

  $tooltip: {
    border: '1px solid #2aa19899',
    backgroundColor: '#00212b'
  },
  '$tooltip.autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#073642',
      color: '#93a1a1'
    }
  }
}, {dark: true})

export const solarizedDarkHighlightStyle = HighlightStyle.define(
  // const, let, function, if
  {tag: t.keyword, color: '#859900'},
  // document
  {tag: [t.name, t.deleted, t.character, t.macroName], color: '#268BD2'},
  // getElementById
  {tag: [t.propertyName], color: '#268BD2'},
  // "string"
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#2AA198'},
  // render
  {tag: [t.function(t.variableName), t.labelName], color: '#268BD2'},
  // ???
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#CB4B16'},
  // btn, count, fn render()
  {tag: [t.definition(t.name), t.separator], color: '#268BD2'},
  {tag: [t.className], color: '#CB4B16'},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#D33682'},
  {tag: [t.typeName], color: '#859900', fontStyle: ''},
  {tag: [t.operator, t.operatorKeyword], color: '#859900'},
  {tag: [t.url, t.escape, t.regexp, t.link], color: '#D30102'},
  {tag: [t.meta, t.comment], color: '#657B83'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#268BD2'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#268BD2'},
  {tag: t.invalid, color: ''},
)

export const solarizedDark: Extension = [
  solarizedDarkTheme,
  solarizedDarkHighlightStyle,
]
