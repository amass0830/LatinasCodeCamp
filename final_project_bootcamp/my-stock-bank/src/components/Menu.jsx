import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/buy-stocks">Comprar Acciones</Link>
          </li>
          <li>
            <Link to="/deposit-funds">Depositar Fondos</Link>
          </li>
          <li>
            <Link to="/review-portfolio">Revisar Cartera</Link>
          </li>
          <li>
            <Link to="/sell-stocks">Vender Acciones</Link>
          </li>
          <li>
            <Link to="/change-pin">Cambiar PIN</Link>
          </li>
          <li>
            <Link to="/logout">Cerrar Sesión</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
