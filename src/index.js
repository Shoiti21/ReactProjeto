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

// ReactDOM.render( componente, container ) - Renderiza o componente React no html
const container = document.getElementById('app');
ReactDOM.render(textHelloWithClass, container);