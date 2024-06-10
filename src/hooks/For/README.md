# Rendering list

This tool assists in the rendering of the one list of the components, incorporating a JSX Element as native code, making the reading and comprehension for the dev. For more details, please refer to the native implementation in the (React Doc v18.x.x)[https://react.dev/learn/rendering-lists]

```jsx
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
    const chemists = people.filter((person) => person.profession === "chemist");
    const listItems = chemists.map((person) => (
        <li>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
            </p>
        </li>
    ));
    return (
        <ul>
            <For each={listItems} />
        </ul>
    );
}
```
