import React from 'react';
import {TypeContext} from './UserContext';
/*
 * CONTEXT
 * Disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.
 */
/* SEM CONTEXT
export default function Context(props) {
    return (
      <div>
        <InputCustom theme={props.theme} />
      </div>
    );
}
  
function InputCustom(props) {
    return (
        <input type={props.theme}/>
    );
}
*/
export default function Context() {
    return (
        <div>
            <h2>Hook useContext</h2>
            <InputCustom/>
        </div>
    );
}
function InputCustom() {
    // Atribua um contextType para ler o context do tema atual.
    // React vai encontrar o Provider acima mais próximo e vai usa-lo.
    // Neste exemplo, o tema atual é "text".
    const typeContext = React.useContext(TypeContext);
    return (
        <input type={typeContext}/>
    );
}