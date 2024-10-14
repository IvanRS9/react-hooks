import React, { useEffect } from 'react'

const StateHook = () => {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return <>
        <h4>useState Hook</h4>
        <h4>Count: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>
}

export default StateHook
