import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const githubDarkTheme = EditorView.theme({
  $: {
    color: '#d1d5da',
    backgroundColor: '#24292e',
    '& ::selection': {backgroundColor: '#3392FF44'},
    caretColor: '#c8e1ff',
  },

  '$$focused $cursor': {borderLeftColor: '#c8e1ff'},
  '$$focused $selectionBackground': {backgroundColor: '#3392FF44'},

  $panels: {backgroundColor: '#2f363d', color: '#d1d5da'},
  '$panels.top': {borderBottom: '2px solid black'},
  '$panels.bottom': {borderTop: '2px solid black'},

  $searchMatch: {
    backgroundColor: '#2f363d',
    outline: `1px solid #1b1f23`
  },
  '$searchMatch.selected': {
    backgroundColor: '#3392FF44'
  },

  $activeLine: {backgroundColor: '#3392FF44'},
  $selectionMatch: {backgroundColor: '#3392FF44'},

  '$matchingBracket, $nonmatchingBracket': {
    backgroundColor: '#f97583',
    outline: 'none'
  },
  $gutters: {
    backgroundColor: '#24292e',
    color: '#d1d5da',
    border: 'none'
  },
  '$gutterElement.lineNumber': {color: 'inherit'},

  $foldPlaceholder: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#d1d5da'
  },

  $tooltip: {
    border: '1px solid #1b1f23',
    backgroundColor: '#2f363d'
  },
  '$tooltip.autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#3392FF44',
      color: '#d1d5da'
    }
  }
}, {dark: true})

export const githubDarkHighlightStyle = HighlightStyle.define([
  // const, let, function, if
  {tag: t.keyword, color: '#f97583'},
  // document
  {tag: [t.name, t.deleted, t.character, t.macroName], color: '#e1e4e8'},
  // getElementById
  {tag: [t.propertyName], color: '#b392f0'},
  // "string"
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#9ecbff'},
  // render
  {tag: [t.function(t.variableName), t.labelName], color: '#b392f0'},
  // ???
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#79b8ff'},
  // btn, count, fn render()
  {tag: [t.definition(t.name), t.separator], color: '#e1e4e8'},
  {tag: [t.className], color: '#b392f0'},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#79b8ff'},
  {tag: [t.typeName], color: '#79b8ff', fontStyle: ''},
  {tag: [t.operator, t.operatorKeyword], color: '#f97583'},
  {tag: [t.url, t.escape, t.regexp, t.link], color: '#dbedff'},
  {tag: [t.meta, t.comment], color: '#6a737d'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#79b8ff'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#e1e4e8'},
  {tag: t.invalid, color: '#f97583'},
])

export const githubDark: Extension = [
  githubDarkTheme,
  githubDarkHighlightStyle,
]
