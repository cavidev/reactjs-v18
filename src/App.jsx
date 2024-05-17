import { useState } from 'react'
import Show from './Show'

import './App.css'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <button style={{width: "100px"}} onClick={() => setShow((prev => !prev))}>
        Mostrar
      </button>
      <Show>
        <Show.When isTrue={show}>
          <>Hola me mostre jejeje</>
          <div>Otros</div>
          <div>Otros 2</div>
        </Show.When>
      </Show>
    </>
  )
}

export default App
