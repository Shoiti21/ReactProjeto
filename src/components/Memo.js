import React, { useMemo, useState } from 'react';

// useMemo é utilizado para memorizar um valor evitando uma renderização desnecessária
export default function Memo() {
    const [texto, setTexto] = useState('');
    const [showMensagem, setShowMensagem] = useState(false);

    const CheckText = (event) => {
        const valor = event.target.value;
        setShowMensagem(valor.length >= 7);
        setTexto(valor);
    }
    /* SEM MEMO
    return (
        <div>
            <p>{texto}</p>
            <input type="text" value={texto} onChange={CheckText}></input>
            {showMensagem ? <Mensagem active={showMensagem}></Mensagem> : null}
        </div>
    )
    */
    const memoizedMensagem = useMemo(() => showMensagem ? <Mensagem active={showMensagem}></Mensagem> : null, [showMensagem]);

    return (
        <div>
            <p>{texto}</p>
            <input type="text" value={texto} onChange={CheckText}></input>
            {memoizedMensagem}
        </div>
    )
}

function Mensagem() {
    return (<p>Chegou nos 7 caracteres!</p>)
}