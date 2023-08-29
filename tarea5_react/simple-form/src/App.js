import React from 'react';
import './App.css';
import profilePic from './profile-amass.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hola, soy Andrea Lucia y estoy en TechnoLatinas</h1>
      </header>
      <div className="profile-pic">
        <img
          src={profilePic}
          alt="Mi Imagen de Perfil"
          className="rounded-image"
        />
      </div>
      <div className="links">
        <a href="https://www.facebook.com/amass0830/" target="_blank" rel="noopener noreferrer">Mi Facebook</a>
        <a href="https://twitter.com/amass0830" target="_blank" rel="noopener noreferrer">Mi Twitter</a>
        <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">Mi Instagram</a>
        <a href="https://github.com/amass0830" target="_blank" rel="noopener noreferrer">Mi GitHub</a>
      </div>

      <h3>Somos Technolatinas!</h3>
      <h6>Latinas Code Camp</h6>

      <footer>
        <p>Derechos de autor © {new Date().getFullYear()} Andrea Lucia</p>
      </footer>
    </div>
  );
}

export default App;
