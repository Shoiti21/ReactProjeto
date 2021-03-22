import React from 'react';
import ReactDOM from 'react-dom';

// React.createElement( elemento, propriedades, filho) - Criação de um elemento no html.
const textHello = React.createElement('h1', null, 'Oi mundo!');

// ReactDOM.render( componente, container ) - Renderiza o componente React no html
const container = document.getElementById('app');
ReactDOM.render(textHello, container);