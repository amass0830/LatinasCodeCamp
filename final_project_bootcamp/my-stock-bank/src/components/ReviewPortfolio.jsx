import React from 'react';

function ReviewPortfolio({ cash, appleStocks, techStocks }) {
  return (
    <div>
      <h2>Revisar Portafolio</h2>
      <div>
        <h3>Tu Portafolio de Acciones:</h3>
        <ul>
          <li>
             BookStore:
            <span> Cantidad: {bookStocks.amount}</span>
            <span> Precio: {booktocks.price} USD</span>
          </li>
          <li>
            Money:
            <span> Cantidad: {techStocks.amount}</span>
            <span> Precio: {techStocks.price} $</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Saldo de Efectivo:</h3>
        <p>{cash} $d</p>
      </div>
    </div>
  );
}

export default ReviewPortfolio;
