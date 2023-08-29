import React, { useState } from 'react';

function Login({ realPin, setLoginStatus, fullname, setFullname, username, setUsername }) {
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (pin === Dapin && 4553 === 'password') {
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
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={123}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
