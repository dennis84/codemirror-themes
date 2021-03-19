import {EditorView} from '@codemirror/view'
import {Extension} from '@codemirror/state'
import {HighlightStyle, tags as t} from '@codemirror/highlight'

export const draculaTheme = EditorView.theme({
  '&': {
    color: '#F8F8F2',
    backgroundColor: '#282A36',
    '& ::selection': {backgroundColor: '#44475A'},
    caretColor: '#F8F8F2',
  },

  '&.cm-focused .cm-cursor': {borderLeftColor: '#F8F8F2'},
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {backgroundColor: '#44475A'},

  '.cm-panels': {backgroundColor: '#343746', color: '#F8F8F2'},
  '.cm-panels.cm-panels-top': {borderBottom: '2px solid black'},
  '.cm-panels.cm-panels-bottom': {borderTop: '2px solid black'},

  '.cm-searchMatch': {
    backgroundColor: '#343746',
    outline: `1px solid #191A21`
  },
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor: '#44475A'
  },

  '.cm-activeLine': {backgroundColor: '#44475A'},
  '.cm-selectionMatch': {backgroundColor: '#44475A'},

  '.cm-matchingBracket, .cm-nonmatchingBracket': {
    backgroundColor: '#FF5555',
    outline: 'none'
  },
  '.cm-gutters': {
    backgroundColor: '#282A36',
    color: '#F8F8F2',
    border: 'none'
  },
  '.cm-lineNumbers, .cm-gutterElement': {color: 'inherit'},

  '.cm-foldPlaceholder': {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#F8F8F2'
  },

  '.cm-tooltip': {
    border: '1px solid #191A21',
    backgroundColor: '#343746'
  },
  '.cm-tooltip-autocomplete': {
    '& > ul > li[aria-selected]': {
      backgroundColor: '#44475A',
      color: '#F8F8F2'
    }
  }
}, {dark: true})

export const draculaHighlightStyle = HighlightStyle.define([
  // const, let, function, if
  {tag: t.keyword, color: '#FF79C6'},
  // document
  {tag: [t.name, t.deleted, t.character, t.macroName], color: '#BD93F9'},
  // getElementById
  {tag: [t.propertyName], color: '#50FA7B'},
  // "string"
  {tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#F1FA8C'},
  // render
  {tag: [t.function(t.variableName), t.labelName], color: '#50FA7B'},
  // ???
  {tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#BD93F9'},
  // btn, count, fn render()
  {tag: [t.definition(t.name), t.separator], color: '#BD93F9'},
  {tag: [t.className], color: '#8BE9FD'},
  {tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#BD93F9'},
  {tag: [t.typeName], color: '#8BE9FD', fontStyle: 'italic'},
  {tag: [t.operator, t.operatorKeyword], color: '#FF79C6'},
  {tag: [t.url, t.escape, t.regexp, t.link], color: '#F1FA8C'},
  {tag: [t.meta, t.comment], color: '#6272A4'},
  {tag: t.strong, fontWeight: 'bold'},
  {tag: t.emphasis, fontStyle: 'italic'},
  {tag: t.link, textDecoration: 'underline'},
  {tag: t.heading, fontWeight: 'bold', color: '#BD93F9'},
  {tag: [t.atom, t.bool, t.special(t.variableName)], color: '#BD93F9'},
  {tag: t.invalid, color: '#FF5555'},
])

export const dracula: Extension = [
  draculaTheme,
  draculaHighlightStyle,
]
