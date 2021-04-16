import React from 'react';
import ReactDOM from 'react-dom';

import Hooks from './components/Hooks';
import PrimeirosPassos from './components/PrimeirosPassos';

// Importar o css para que o React encontre a class.
import './index.css';

// ReactDOM.render( componente, container ) - Renderiza o componente React no html
const container = document.getElementById('app');
ReactDOM.render(<PrimeirosPassos/>, container);

/* =====================================================================
 * HOOKS
 * Eles permitem que você use o state e outros recursos do React sem escrever uma classe.
 * =====================================================================
 */

const containerHooks = document.getElementById('hooks');
ReactDOM.render(<Hooks/>, containerHooks);