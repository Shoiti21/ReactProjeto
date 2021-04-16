import React from 'react'
// Use Hooks Apenas Dentro de Funções do React
export default function Hooks(){

    /* setState - criar state em uma função sem a necessidade de criar uma class com um construtor
     * const [nomeDoState, setDoState] = React.useState(valor inicial do state);
     */
    const [idade, setIdade] = React.useState(25);
    const [fruta, setFruta] = React.useState('laranja');
    const [array, setArray] = React.useState([{ text: 'Learn Hooks' }]);

    const [contador, setContador] = React.useState(0);

    /* useEffect - React executa os efeitos após cada renderização incluindo a primeira renderização. 
     * Similar a componentDidMount e componentDidUpdate
     * useEffect(*arrow function)
     */
    React.useEffect(() => {
        document.title = contador; // Altera titulo toda vez que o 'contador' muda.
    })

    /* 
     * CRIANDO UM HOOK
     * Um Hook customizado é uma função JavaScript
     */
    const chegou = usePrimeiroHook(contador)

    return (
      <div>
        <h2>Você apertou {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>
          Click aqui
        </button>
        <h2>Hook customizado</h2>
        {chegou ? <p>Chegou no 10</p> : <p>Não chegou no 10</p>}
      </div>
    );
}

/* 
 * HOOK CUSTOMIZADO
 */
function usePrimeiroHook(numero) {

    const [chegouDez, setChegouDez] = React.useState(null);

    React.useEffect(() => {
        setChegouDez(numero >= 10)
    })

    return chegouDez;
}