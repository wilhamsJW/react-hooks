
/** Agora com variável no array de dependencias, isso é útil caso queira fazer com que o request seja 
chamado em outros lugares ou são outras requests */

import React, { useState, useEffect } from 'react';

export function App() {
  const [datTwo, setDataTwo] = useState();
  const [change, setChange] = useState();
  const [qtd, setQtd] = useState(1);

  // Com variável no array de dependecia
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${qtd}`);
        const jsonData = await response.json();
        setDataTwo(jsonData);
        console.log("datTwo", jsonData)
      } catch (error) {
        console.log('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, [change]); // cada vez que essa var change for alterada o código dentro do useEffect será executado e isso acontecerá a cada click do usuário

  const getDatTwo = () => {
    const result = qtd + 1
    setQtd(result)
    return setChange(prevDataTwo => !prevDataTwo); // faz com que a cada click do usuário o código dentro do useffect seja executado
    /**
    Sobre setChange(prevDataTwo => !prevDataTwo)
    A função de atualização recebe um callback que acessa o valor anterior (prevDataTwo) e retorna o seu oposto (!prevDataTwo), invertendo assim o valor booleano. */
  }

  return (
    <div>
      <h1>Dados da API:</h1>
      <ul>
        {datTwo?.results.map((item, i) => (
          <li key={i}><h3>{item.name}</h3></li>
        ))}
      </ul>
      <button onClick={getDatTwo}>getDatTwo</button>
    </div>
  );
};

/**
 * Explicações sobre o useEffect
 * 
 * Quando usar?
 * 
 * O useEffect é utilizado para realizar efeitos colaterais em componentes funcionais do React. Efeitos colaterais referem-se a qualquer tipo de interação com o mundo externo, como chamadas a APIs, manipulação do DOM, assinatura de eventos, entre outros.

Aqui estão alguns casos comuns em que você pode usar o useEffect:

Chamadas de API: Use o useEffect para fazer solicitações a APIs externas e obter dados para o seu componente.

Atualização do título da página: Você pode utilizar o useEffect para atualizar o título da página com base em algum estado ou propriedade do componente.

Gerenciamento de assinaturas de eventos: Use o useEffect para adicionar e remover event listeners, como manipulação de cliques, teclas pressionadas, rolagem, etc.

Manipulação do DOM: O useEffect também pode ser usado para interagir com o DOM, como a criação ou remoção de elementos dinamicamente.

Limpeza de recursos: Quando você precisa limpar algum recurso ou cancelar uma tarefa quando o componente é desmontado, o useEffect permite especificar essa lógica de limpeza.

Integração com bibliotecas externas: Se você estiver utilizando alguma biblioteca externa que requer inicialização, configuração ou limpeza, você pode usar o useEffect para lidar com essas tarefas.

Em resumo, o useEffect é usado sempre que você precisa executar código que tenha efeitos colaterais, como interações com o mundo externo, dentro de um componente funcional do React. Ele ajuda a manter o ciclo de vida e o estado do componente de forma declarativa.

O que é aquele array vazio? nele?

ex:  
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []); /*** Esse array VAzio ***
  
  O array vazio, quer dizer que esse código só será executado quando o coponeente for montado, vc passar variaveis nele e quando essas variaveis forem modificadas
  o useEffect executará seu código novamente

  */