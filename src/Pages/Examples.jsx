import { useState } from 'react'
import Show from '../components/Show/Show'
import For from '../components/For/For'

function Examples() {
  const [show, setShow] = useState(false)
  const userList = ["Carlos", "Mario", "Rodrigo", "Joe"];

  return (
    <div className='flex flex-row gap-6' >
        <div className='flex flex-col gap-1' >
            <h2>Show Component</h2>
            <button onClick={() => setShow((prev => !prev))}>
                Show {show && "✔️" || "❌"}
            </button>
            <Show>
                <Show.When isTrue={show} className="bg-slate-400" >
                    <div>{"👾"}✔️</div>
                </Show.When>
                <Show.Else>
                    <div className="text-right">❌{"👾"}</div>
                </Show.Else>
            </Show>
        </div>
        <div>
            <h2>For Component</h2>
            <ul className='items-center' >
                <For each={userList} 
                /* render={(item, index) => <li>{item}</li>} */
                >
                    {(item, index) =>
                        <li key={index}>👉🏽{item}</li>
                    }
                </For>
            </ul>
        </div>
    </div>
  )
}

export default Examples
