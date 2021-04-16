import React from 'react';

// React.createElement( elemento, propriedades, filho) - Criação de um elemento no html.
const textHello = React.createElement('h1', null, 'Oi mundo!');

// Criação de um elemento com uma class chamada .text-color-blue
const textHelloWithClass = React.createElement(
    'h1',
    { className: 'text-color-blue' },
    'Olá mundo!'
)
// Criação do mesmo componente em JSX
class TextHelloWithClass extends React.Component {
    render() {
        return (
            <hi class="text-color-blue">Olá mundo!</hi>
        );
    }
}

/* Criação de um lista ul
 * <div>
 *     <h1 class="text-color-blue"></h1>
 *     <ul>
 *         <li class="item-1">Item 1</li>
 *         <li class="item-2">Item 2</li>
 *         <li class="item-3">Item 3</li>
 *     </ul>
 * </div>
 */
const myList = React.createElement(
    'ul',
    null,
    [
        React.createElement('li', { className: 'item-1' }, 'Item 1'),
        React.createElement('li', { className: 'item-2' }, 'Item 2'),
        React.createElement('li', { className: 'item-3' }, 'Item 3')
    ]
)
// Criação do mesmo componente em JSX
class MyList extends React.Component {
    render() {
        return (
            <ul>
                <li class="item-1">Item 1</li>
                <li class="item-2">Item 2</li>
                <li class="item-3">Item 3</li>
            </ul>
        );
    }
}

// Criação de um contador pasando paramentros do State
// State é forma que armazenamos dados no React 
class MyContador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "contador",
            contador: 0,
            contador2: 0
        }
    }

    // Função de adicionar +1
    adicionar() {
        this.setState({
            contador2: this.state.contador2 + 1
        })
    }

    render() {
        setTimeout( () => {
            // OBSERVAÇÃO - Se é chamado o metodo setState, o metodo render é chamado novamente
            // Nesse exempplo do contador - contructor() -> state = {} -> render() -> setTimeOut() -> setState() -> render() ...
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000)

        // Passandor valor pelo props
        return (
            <div>
                <h2>{this.state.title}</h2>
                <Contador valor = { this.state.contador }/> 
                <MyFuctionComponent valor = { this.state.contador2 }/>
                <MyButton label="Adicionar +1" click={ () => this.adicionar()}/> 
            </div>
        );
    }
}

class Contador extends React.Component {
    render() {
        return (
            <h3>{this.props.valor}</h3>
        );
    }
}

const MyFuctionComponent = function(props) {
    return (
        <h1>Functional Component = {props.valor}</h1>
    );
}

// São feitas chamadas por Arrow Function para não ter que fazer bind da função.
const MyButton = (props) => (
    <button onClick={ () => props.click() }>{ props.label }</button>
);

// Você pode criar um componente com um filho sendo também uma componente
const myDiv = React.createElement(
    'div',
    { className: 'my-div' },
    [
        <TextHelloWithClass/>, // posso usar  <TextHelloWithClass><TextHelloWithClass/>
        <MyList/>
    ]
)
// Criação do mesmo componente em JSX
class MyDiv extends React.Component {
    render() {
        return (
            <div class="my-div">
                <TextHelloWithClass/>
                <MyList/>
            </div>
        );
    }
}

export default class PrimeirosPassos extends React.Component {
    render() {
        return (
            <div>
                <MyDiv/>
                <MyContador/>
            </div>
        );
    }
}