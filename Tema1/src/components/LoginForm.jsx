import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Verifique se o nome de usuário e a senha estão corretos
      if (username === 'usuario' && password === 'senha123') {
        // Lógica de login bem-sucedido aqui
        console.log('Login successful');
      } else {
        // Exiba uma mensagem de erro ou lide com o erro
        console.log('Invalid username or password');
      }
  
      setUsername('');
      setPassword('');
    };
  
    return (
      <form className="max-w-xs mx-auto p-4 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        {/* Input do nome de usuário */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={handleUsernameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        {/* Input da senha */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={handlePasswordChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        {/* Botão de login */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            <a href="/products">Login</a>
        </button>
      </form>
    );
  };
  
  export default LoginForm;
  
