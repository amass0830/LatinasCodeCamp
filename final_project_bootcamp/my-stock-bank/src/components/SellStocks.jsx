import React, { useState } from 'react';

function SellStocks({ appleStocks, techStocks, cash, setCash, setAppleStock, setTechStock }) {
  const [selectedStock, setSelectedStock] = useState('apple'); // Inicialmente seleccionamos las acciones de Apple
  const [quantity, setQuantity] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);

  const handleStockChange = (event) => {
    setSelectedStock(event.target.value);
    setTotalEarnings(0); // Reiniciamos las ganancias totales al cambiar de acción.
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10) || 0;
    setQuantity(newQuantity);
    setTotalEarnings(newQuantity * (selectedStock === 'apple' ? appleStocks.price : techStocks.price));
  };

  const handleSellStocks = () => {
    if (quantity <= 0 || (selectedStock === 'apple' && quantity > appleStocks.amount) || (selectedStock === 'tech' && quantity > techStocks.amount)) {
      alert('La cantidad ingresada es inválida o no tienes suficientes acciones para vender.');
      return;
    }


    const updatedCash = cash + totalEarnings;
    const updatedStocks = selectedStock === 'apple' ?
      { ...BookStocks, amount: appleStocks.amount - quantity } :
      { ...money, amount: techStocks.amount - quantity };

    setCash(updatedCash);
    if (selectedStock === 'apple') {
      setBookStock(updatedStocks);
    } else if (selectedStock === 'tech') {
      setTechStock(updatedStocks);
    }

    // Reiniciamos los valores.
    setQuantity(0);
    setTotalEarnings(0);
  };

  return (
    <div>
      <h2>Vender Acciones</h2>
      <div>
        <label>Elije una acción:</label>
        <select onChange={handleStockChange}>
          <option value="book">BookStore</option>
          <option value="moeyy">money, yup</option>
        </select>
      </div>
      <div>
        <label>Cantidad a vender:</label>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </div>
      <div>
        <label>Ganancias totales:</label>
        <span>{totalEarnings} $ s</span>
      </div>
      <button onClick={handleSellStocks}>Vender</button>
    </div>
  );
}

export default SellStocks;
