import React, { useState } from "react";

const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    const increase = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    return {
        counter,
        increase,
        decrement,
        reset,
    };
};

export default function App() {
    const counterA = useCounter(10);
    const counterB = useCounter(20);

    return (
        <div>
            <div>{counterA.counter}</div>
            <button onClick={counterA.increase}>+</button>

            <div>{counterB.counter}</div>
            <button onClick={counterB.increase}>+</button>
        </div>
    );
}
