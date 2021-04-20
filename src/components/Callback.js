import React, {useCallback, useState} from 'react';

export default function Callback() {
    const [texto, setTexto] = useState('');
    const [showMensagem, setShowMensagem] = useState(false);

    const CheckText = (event) => {
        const valor = event.target.value;
        setShowMensagem(valor.length >= 7);
        setTexto(valor);
    }

    /*
    const Mensagem = (item) => {
        console.log("oi")
        if(item) {
            return (
                <p>Chegou nos 7 caracteres!</p>
            );
        }
        else {
            return null;
        }

    }
    return (
        <div>
            <p>{texto}</p>
            <input type="text" value={texto} onChange={CheckText}></input>
            {Mensagem(showMensagem)}
        </div>
    )
    */

    // useCallback - Memoriza uma função, a função não é re-renderizada novamente se o estado showMensagem não mudar, a função permanece intacta desde sua primeira renderização 
    const memoizedMensagem = useCallback((item) => {
        if(item) {
            return (
                <p>Chegou nos 7 caracteres!</p>
            );
        }
        else {
            return null;
        }
    }
    , [showMensagem]);

    return (
        <div>
            <p>{texto}</p>
            <input type="text" value={texto} onChange={CheckText}></input>
            {memoizedMensagem(showMensagem)}
        </div>
    )
}