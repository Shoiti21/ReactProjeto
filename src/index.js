import React from 'react';
import ReactDOM from 'react-dom';

import Hooks from './components/Hooks';
import PrimeirosPassos from './components/PrimeirosPassos';
import Context from './components/Context';
import {TypeContext} from './components/UserContext';

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
ReactDOM.render([<Hooks/>], containerHooks);

/* Sem Context
const containerHooksContext = document.getElementById('hooks-context');
ReactDOM.render(<Context theme="password"/>, containerHooksContext); 
*/
const containerHooksContext = document.getElementById('hooks-context');
ReactDOM.render(
    <TypeContext.Provider value="password">
        <Context/>
    </TypeContext.Provider>, 
    containerHooksContext); 