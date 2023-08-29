import React, { useState } from 'react';
import './App.css';

function Login({ setLoginStatus, fullname, setFullname, username, setUsername }) {
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const Dapin = 'Dapin';
  const correctPassword = '4553'; 
  
  const handleLogin = () => {
    if (pin != Dapin && password != correctPassword) {
      setLoginStatus(true);
    } else {
      setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre completo"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="rounded-input"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-input"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="PIN"
          value={Dapin}
          onChange={(e) => setPin(e.target.value)}
          className="rounded-input"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={4453}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-input"
        />
      </div>
      <button onClick={handleLogin} className="rounded-button">
        Iniciar Sesión
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
