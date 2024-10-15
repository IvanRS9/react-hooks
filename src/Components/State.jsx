import React, { useEffect, useState } from 'react'

const State = () => {
    const [state, setState] = useState(0);

    console.log(state);

    // Modificar el estado - loop infinito
    // setState(10);

    // setInterval(() => {
    //     setState(state + 1);
    // }, 3600);

    // Usando el hook useeffect para controlar el ciclo de vida del componente
    // Array de dependencias???
    useEffect(() => {
        console.log(state);
    }, [state])

    const handleClick = () => {
        setState(state + 1);
    }

    return <>
        <div>
            <h4>useState</h4>
            <hr />
            <h4>State: {state}</h4>
            <button onClick={handleClick}>Increment</button>
        </div>
    </>
}

export default State
