import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const draculaTheme = EditorView.theme({
  $: {
    color: '#F8F8F2',
    backgroundColor: '#282A36',
    '& ::selection': {backgroundColor: '#44475A'},
    caretColor: '',
  },

  '$$focused $cursor': {borderLeftColor: ''},
  '$$focused $selectionBackground': {backgroundColor: '#44475A'},

  $panels: {backgroundColor: '#343746', color: '#F8F8F2'},
  '$panels.top': {borderBottom: '2px solid black'},
  '$panels.bottom': {borderTop: '2px solid black'},

  $searchMatch: {
    backgroundColor: '#343746',
    outline: `1px solid #191A21`
  },
  '$searchMatch.selected': {
    backgroundColor: '#44475A'
  },

  $activeLine: {backgroundColor: '#44475A'},
  $selectionMatch: {backgroundColor: '#44475A'},

  '$matchingBracket, $nonmatchingBracket': {
    backgroundColor: '#FF5555',
    outline: 'none'
  },
  $gutters: {
    backgroundColor: '#282A36',
    color: '#F8F8F2',
    border: 'none'
  },
  '$gutterElement.lineNumber': {color: 'inherit'},

  $foldPlaceholder: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#F8F8F2'
  },

  $tooltip: {
    border: '1px solid #191A21',
    backgroundColor: '#343746'
  },
  '$tooltip.autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#44475A',
      color: '#F8F8F2'
    }
  }
}, {dark: true})

export const draculaHighlightStyle = HighlightStyle.define(
  {tag: t.keyword, color: '#FF79C6'},
  {tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: '#50FA7B'},
  {tag: [t.processingInstruction, t.string, t.inserted], color: '#F1FA8C'},
  {tag: [t.function(t.variableName), t.labelName], color: '#50FA7B'},
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#BD93F9'},
  {tag: [t.definition(t.name), t.separator], color: '#50FA7B'},
  {tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#8BE9FD'},
  {tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: '#F1FA8C'},
  {tag: [t.meta, t.comment], color: '#6272A4'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, color: '#FF79C6', textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#BD93F9'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#FFB86C'},
  {tag: t.invalid, color: '#FF5555'},
)

export const dracula: Extension = [
  draculaTheme,
  draculaHighlightStyle,
]
