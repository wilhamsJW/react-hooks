import React, { useState } from 'react';

function Counter() {
  // Definindo o estado inicial como 0, mas poderia ser de acordo com o dado em questão, podendo ser uma array, objeto, string, null, undefined etc...
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount -> função que atualiza o estado 'count' incrementando o valor atual em 1
    setCount(count + 1);
  };

  const decrement = () => {
    // setCount -> função que atualiza o estado 'count' decrementando o valor atual em 1
    setCount(count - 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default Counter;
