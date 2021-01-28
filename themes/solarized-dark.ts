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
  {tag: t.keyword, color: '#859900'},
  {tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: '#268BD2'},
  {tag: [t.processingInstruction, t.string, t.inserted], color: '#2AA198'},
  {tag: [t.function(t.variableName), t.labelName], color: '#268BD2'},
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#CB4B16'},
  {tag: [t.definition(t.name), t.separator], color: '#268BD2'},
  {tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#CB4B16'},
  {tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: '#D30102'},
  {tag: [t.meta, t.comment], color: '#657B83'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, color: '#859900', textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#268BD2'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: ''},
  {tag: t.invalid, color: ''},
)

export const solarizedDark: Extension = [
  solarizedDarkTheme,
  solarizedDarkHighlightStyle,
]
