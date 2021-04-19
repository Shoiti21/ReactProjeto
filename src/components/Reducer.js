import React, { useReducer, useState } from 'react';

export default function Reducer() {
    /* SEM REDUCER
    const [count, setCount ] = useState(0);

    return (
        <div>
            <h2>useReducer</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
            <button onClick={() => setCount(count - 1)}>Diminuir</button>
        </div>
    );
    */

    // useReducer é um useState, usado geralmente quando eiste um logiva complexa que envolve multiplos sub-valores
    const countReducer = (state, action) => {
        switch (action) {
            case 'AUMENTAR':
                return state + 1;
                break;
            case 'DIMINUIR':
                return state - 1;
                break;
            default:
                return state;
                break;
        }
    }

    const countReducerInitial = 0;

    const [count, setCount] = useReducer( countReducer, countReducerInitial);

    return (
        <div>
            <h2>useReducer</h2>
            <p>{count}</p>
            <button onClick={() => setCount("AUMENTAR")}>Aumentar</button>
            <button onClick={() => setCount("DIMINUIR")}>Diminuir</button>
        </div>
    );
}