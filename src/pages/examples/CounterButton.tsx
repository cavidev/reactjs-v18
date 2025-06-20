import { Dispatch, SetStateAction } from "react";

export const CounterButton = ({ setCount }: { setCount: Dispatch<SetStateAction<number>> }) => {
    return <button onClick={() => setCount((prev) => prev + 1)}>+1</button>;
};
