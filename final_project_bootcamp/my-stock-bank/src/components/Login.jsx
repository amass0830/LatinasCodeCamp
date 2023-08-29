import React, { useState } from 'react';
import './App.css';

function Login({ realPin, setLoginStatus, fullname, setFullname, username, setUsername }) {
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (pin === realPin && password === 'password') { // Compare pin with realPin and password with 'password'
      setLoginStatus(true);
    } else {
      setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión :3 </h2>
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
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="rounded-input" 
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-input" 
        />
      </div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
