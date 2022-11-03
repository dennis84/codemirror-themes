import {EditorView, highlightActiveLine, lineNumbers} from '@codemirror/view'
import {javascript} from '@codemirror/lang-javascript'
import {autocompletion} from '@codemirror/autocomplete'
import {aura} from '../theme/aura'
import {dracula} from '../theme/dracula'
import {githubDark} from '../theme/github-dark'
import {githubLight} from '../theme/github-light'
import {materialDark} from '../theme/material-dark'
import {materialLight} from '../theme/material-light'
import {solarizedDark} from '../theme/solarized-dark'
import {solarizedLight} from '../theme/solarized-light'
import {tokyoNight} from '../theme/tokyo-night'
import {tokyoNightStorm} from '../theme/tokyo-night-storm'
import {tokyoNightDay} from '../theme/tokyo-night-day'

const parent = document.getElementById('examples')
const doc = document.getElementById('code').textContent.trim()

const createEditor = (theme) => {
  const view = new EditorView({
    doc,
    extensions: [
      lineNumbers(),
      highlightActiveLine(),
      javascript({typescript: true}),
      autocompletion(),
      theme,
    ],
    parent,
  })
}

createEditor(aura)
createEditor(dracula)
createEditor(githubDark)
createEditor(githubLight)
createEditor(materialDark)
createEditor(materialLight)
createEditor(solarizedDark)
createEditor(solarizedLight)
createEditor(tokyoNight)
createEditor(tokyoNightStorm)
createEditor(tokyoNightDay)
