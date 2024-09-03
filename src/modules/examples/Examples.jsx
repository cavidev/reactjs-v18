import { useState } from "react";
import Show from "~/hooks/Show/Show";
// import Show_ from "../../hooks/Show/Show";
import For from "~/hooks/For/For";

const emoji = new Array(10000).fill("👾");

function Examples() {
    const [show, setShow] = useState(false);
    const userList = ["Carlos", "Mario", "Rodrigo", "Joe"];
    const [show_, setShow_] = useState(false);

    return (
        <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-1">
                <h2>Show Component</h2>
                <button onClick={() => setShow((prev) => !prev)}>Show {(show && "✔️") || "❌"}</button>
                <Show>
                    <Show.When isTrue={show} className="bg-slate-400">
                        <div>{"👾"}✔️</div>
                    </Show.When>
                    <Show.Else>
                        <div className="text-right">❌{"👾"}</div>
                    </Show.Else>
                </Show>
            </div>
            <div>
                <h2>For Component</h2>
                <ul className="items-center">
                    <For
                        each={userList}
                        /* render={(item, index) => <li>{item}</li>} */
                    >
                        {(item, index) => <li key={index}>👉🏽{item}</li>}
                    </For>
                </ul>
                <h2>For Component</h2>
                <ul className="items-center">
                    <For
                        each={userList}
                        /* render={(item, index) => <li>{item}</li>} */
                    >
                        {(item, index) => <li key={index}>👉🏽{item}</li>}
                    </For>
                </ul>
            </div>
            {/* <div className="flex flex-col gap-4">
                <button onClick={() => setShow_((prev) => !prev)}>{(show_ && "✔️") || "❌"}</button>
                <Show_ when={show_} fallback={<div>fallback</div>}>
                    <div>show</div>
                </Show_>
                <Show_ when={!show_} fallback={<div>fallback</div>}>
                    <div>show</div>
                </Show_>
            </div>
            */}
            <div className="flex flex-col gap-4">
                <button onClick={() => setShow_((prev) => !prev)}>{(show_ && "✔️") || "❌"}</button>
                {/* <Show_ when={show_} fallback={<div>fallback</div>}>
                    <ul>
                        <For
                            each={emoji}
                            /* render={(item, index) => <li>{item}</li>} 
                        >
                            {(item, index) => <li key={index}>👉🏽 {item} </li>}
                        </For>
                    </ul>
                </Show_> */}
            </div>
        </div>
    );
}

export default Examples;
