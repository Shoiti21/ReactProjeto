import React from 'react'

export default function Hooks(){

    /* setState - criar state em uma função sem a necessidade de criar uma class com um construtor
     * const [nomeDoState, setDoState] = React.useState(valor inicial do state);
     */
    const [idade, setIdade] = React.useState(25);
    const [fruta, setFruta] = React.useState('laranja');
    const [array, setArray] = React.useState([{ text: 'Learn Hooks' }]);

    const [contador, setContador] = React.useState(0);

    return (
      <div>
        <h2>Você apertou {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>
          Click aqui
        </button>
      </div>
    );
}