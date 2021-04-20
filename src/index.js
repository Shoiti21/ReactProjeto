import React from 'react';
import ReactDOM from 'react-dom';

import Hooks from './components/Hooks';
import PrimeirosPassos from './components/PrimeirosPassos';
import Context from './components/Context';
import {TypeContext} from './components/UserContext';
import Reducer from './components/Reducer';
import Memo from './components/Memo';
import Callback from './components/Callback';
import Ref from './components/Ref';

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

// useReducer
const containerHooksReducer = document.getElementById('hooks-reducer');
ReactDOM.render(
    <Reducer/>, 
    containerHooksReducer); 

// useMemo
const containerHooksMemo = document.getElementById('hooks-memo');
ReactDOM.render(
    <Memo/>, 
    containerHooksMemo);

// useCallback
const containerHooksCallback = document.getElementById('hooks-callback');
ReactDOM.render(
    <Callback/>, 
    containerHooksCallback); 

// useRef
const containerHooksRef = document.getElementById('hooks-ref');
ReactDOM.render(
    <Ref/>, 
    containerHooksRef); 