import { useState } from "react";
import Show from "./Show";

function Father() {
    const [type, seType] = useState("");

    console.log("");

    return (
        <>
            <input value={type} onInput={(e) => seType(e.target.value)} />
            <Show when={type.length === 6}>Alcance los 6</Show>
            {/* {type.length === 6 && <>Alcance los 6</>}*/}
            {/* <Footer /> */}
        </>
    );
}

export default Father;
