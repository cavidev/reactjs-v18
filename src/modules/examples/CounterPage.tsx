import { useState } from "react";
import { CounterButton } from "./CounterButton";
import { CounterNumber } from "./CounterNumber";

export const CounterPage = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div className="w-48 flex flex-col gap-1">
            <CounterNumber number={count} />
            <CounterButton setCount={setCount} />
        </div>
    );
};
