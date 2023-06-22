import React, { useReducer } from 'react';

import ChildComponent from './ChildComponent'
import ComponentOne from './ComponentOne'

const initialState = { // criado um estado que iremos usar durante nossa aplicação
  count: 0,
  isLogeed: false,
  nameUser: "Sem Nome"
};

// (state, action) -> state se refere ao initialState e action é action enviada pelo dispatch dentro da função do button
const reducer = (state, action) => { // criado uma função que será lida pelo hooke usereducer()
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, isLogeed: state.isLogeed = 'online' }; 
    case 'decrement':
      return { ...state, count: state.count - 1, isLogeed: state.isLogeed = 'offline' };
    case 'reset':
      return { ...state, count: 0 };
    default:
      return state;
  }
};
// ...state -> copia os dados garantindo q eles não vão estar intactos durante toda minha aplicação, mesmo que a condição caia em outros cases os dados q não estão sendo alterados guardarão o último valor dado a ele, podendo alterar qq outro valor e que não resetará os outros dados, caso contrário sem os '...' vc irá perder os dados reais definido durante a aplicação

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // usando o useReducer passamos dois parametros para dentro dele, um é um função que irá setar os dados e a outra é o estado de dados q vão ser alterados

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>isLogeed: {state.isLogeed}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button> {/** disparando type para que o useReducer chame a função reducer e execute o que for pedido */}
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <ChildComponent state={state} dispatch={dispatch} /> {/** Usando os estados manipulados em outra componente */}
      <ComponentOne  state={state} dispatch={dispatch} />

    </div>
  );
};
