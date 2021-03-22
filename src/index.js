import React from 'react';
import ReactDOM from 'react-dom';

// Importar o css para que o React encontre a class.
import './index.css';

// React.createElement( elemento, propriedades, filho) - Criação de um elemento no html.
const textHello = React.createElement('h1', null, 'Oi mundo!');

// Criação de um elemento com uma class chamada .text-color-blue
const textHelloWithClass = React.createElement(
    'h1',
    { className: 'text-color-blue' },
    'Olá mundo!'
)

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


// Você pode criar um componente com um filho sendo também uma componente
const myDiv = React.createElement(
    'div',
    { className: 'my-div' },
    [
        textHelloWithClass, 
        myList
    ]
)

// ReactDOM.render( componente, container ) - Renderiza o componente React no html
const container = document.getElementById('app');
ReactDOM.render(myDiv, container);