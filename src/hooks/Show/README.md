# Conditional component

This tool assists the rendering component conditionally, incorporating an easy way to validate the condition inside of JSXElement syntax as a property and avoiding the re-renders if the father throws re-renders ensuring proper functionality. For more details, please refer to the native implementation in the (React Doc v18.x.x)[https://react.dev/learn/conditional-rendering]

```jsx
const show = useState(true);
<>{show && <div>component</div>}</>;
```

by

```jsx
const [isRendering, setIsRendering] = useState("");

<Show when={isRendering} fallback={<>Not show the child</>}>
    <>Child Showed</>
</Show>;
```
