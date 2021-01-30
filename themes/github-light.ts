import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const githubLightTheme = EditorView.theme({
  $: {
    color: '#444d56',
    backgroundColor: '#fff',
    '& ::selection': {backgroundColor: '#0366d625'},
    caretColor: '#044289',
  },

  '$$focused $cursor': {borderLeftColor: '#044289'},
  '$$focused $selectionBackground': {backgroundColor: '#0366d625'},

  $panels: {backgroundColor: '#fafbfc', color: '#444d56'},
  '$panels.top': {borderBottom: '2px solid black'},
  '$panels.bottom': {borderTop: '2px solid black'},

  $searchMatch: {
    backgroundColor: '#fafbfc',
    outline: `1px solid #e1e4e8`
  },
  '$searchMatch.selected': {
    backgroundColor: '#0366d625'
  },

  $activeLine: {backgroundColor: '#0366d625'},
  $selectionMatch: {backgroundColor: '#0366d625'},

  '$matchingBracket, $nonmatchingBracket': {
    backgroundColor: '#cb2431',
    outline: 'none'
  },
  $gutters: {
    backgroundColor: '#fff',
    color: '#444d56',
    border: 'none'
  },
  '$gutterElement.lineNumber': {color: 'inherit'},

  $foldPlaceholder: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#444d56'
  },

  $tooltip: {
    border: '1px solid #e1e4e8',
    backgroundColor: '#fafbfc'
  },
  '$tooltip.autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#0366d625',
      color: '#444d56'
    }
  }
}, {dark: false})

export const githubLightHighlightStyle = HighlightStyle.define(
  // const, let, function, if
  {tag: t.keyword, color: '#d73a49'},
  // document
  {tag: [t.name, t.deleted, t.character, t.macroName], color: '#e36209'},
  // getElementById
  {tag: [t.propertyName], color: '#6f42c1'},
  // "string"
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#032f62'},
  // render
  {tag: [t.function(t.variableName), t.labelName], color: '#6f42c1'},
  // ???
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#005cc5'},
  // btn, count, fn render()
  {tag: [t.definition(t.name), t.separator], color: '#e36209'},
  {tag: [t.className], color: '#6f42c1'},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#005cc5'},
  {tag: [t.typeName], color: '#005cc5', fontStyle: ''},
  {tag: [t.operator, t.operatorKeyword], color: '#d73a49'},
  {tag: [t.url, t.escape, t.regexp, t.link], color: '#032f62'},
  {tag: [t.meta, t.comment], color: '#6a737d'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#005cc5'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#e36209'},
  {tag: t.invalid, color: '#cb2431'},
)

export const githubLight: Extension = [
  githubLightTheme,
  githubLightHighlightStyle,
]
