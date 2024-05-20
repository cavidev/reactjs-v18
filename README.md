# React 18 + Vite

This template provides a minimal setup to get React working in Vite.

```bash
# Command: 
yarn create vite my-vue-app --template react
# Run:
yarn run dev
```
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Building React Component utils

### Show
You can implement this component and avoid the old keys
```jsx
    const show = useState(true);
    <>{ show && 
        <div>component</div> }
    </>
```
by 
```jsx
    const show = useState(true);
    <Show>
        <Show.When isTrue={show} >
            <div>{"👾"}✔️</div>
        </Show.When>
        <Show.Else>
            <div>❌{"👾"}</div>
        </Show.Else>
    </Show>
```

now, the sintax jsx is better to read and understanding