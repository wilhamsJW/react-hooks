import React, { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value // [e.target.name] -> usamos essa sintaxe quando queiremos que a chave se torne um elemento dinãmico, ele está lendo a var 'name' do input, que pode ser name, email ou password
                                     // e.target.value -> capturando o elemento digitado pelo user              
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user); // Aqui você pode enviar os dados para um servidor, por exemplo
    setUser({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        /> {/** onChange -> está escutando as mudanças do meu input e invocando a função handleChange, a função handleChange seta valores de chave e valor pegos dentro do input q são a var name e value */}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default UserForm;
