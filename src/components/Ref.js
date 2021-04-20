import React, {useRef} from 'react';

export default function Ref() {
    
    // useRef é muito utilizado para acessar elementos Dom ou React. Quando passamos um ref em componente, o React configura a propriedade .current para o nó DOM correspondente
    const refInput = useRef(null)
    // createRef tem a mesma finalidade que o useRef, mas ele é criado toda vez que o componente é renderizado, já no useRef é mantido o objeto nas renderizações
    //const refInput = createRef(null)
    const onFocusInput = () => {
        refInput.current.focus();
    }
    return (
        <div>
            <input ref={refInput}></input>
            <button onClick={onFocusInput}>Focar o input</button>
        </div>
    )
}