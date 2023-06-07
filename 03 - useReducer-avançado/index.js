import React, { useReducer } from 'react';

import ChildComponent from './ChildComponent'
import ComponentOne from './ComponentOne'

const initialState = { // criado um estado que iremos usar durante nossa aplicação
  count: 0,
  isLogeed: false,
  nameUser: "Sem Nome"
};

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

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // usando o useReducer

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>isLogeed: {state.isLogeed}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button> {/** disparando type para que o useReducer chame a função reducer e execute o que for pedido */}
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <ChildComponent state={state} dispatch={dispatch} />
      <ComponentOne  state={state} dispatch={dispatch} />

    </div>
  );
};
