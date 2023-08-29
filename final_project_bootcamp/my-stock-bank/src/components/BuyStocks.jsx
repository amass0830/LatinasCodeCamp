import React, { useState } from 'react';

function BuyStocks({ BookStocks, moneyStocks, cash, setCash, setBootStock, setTechStock }) {
  const [selectedStock, setSelectedStock] = useState(bookStocks);
  const [quantity, setQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleStockChange = (stock) => {
    setSelectedStock(stock);
    setTotalCost(0); 
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10) || 0;
    setQuantity(newQuantity);
    setTotalCost(newQuantity * selectedStock.price);
  };

  const handleBuyStocks = () => {
    if (quantity <= 0 || totalCost > cash) {
      alert('La cantidad ingresada es inválida o no tienes suficiente efectivo.');
      return;
    }


    const updatedCash = cash - totalCost;
    const updatedStocks = { ...selectedStock, amount: selectedStock.amount + quantity };

    setCash(updatedCash);
    if (selectedStock.name === 'Books Office') {
      setAppleStock(updatedStocks);
    } else if (selectedStock.name === 'Money') {
      setTechStock(updatedStocks);
    }
    setQuantity(0);
    setTotalCost(0);
  };

  return (
    <div>
      <h2>Comprar Acciones</h2>
      <div>
        <label>Elije una acción:</label>
        <select onChange={(e) => handleStockChange(e.target.value)}>
          <option value={appleStocks}> books Inc</option>
          <option value={techStocks}> Money</option>
        </select>
      </div>
      <div>
        <label>Cantidad:</label>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </div>
      <div>
        <label>Costo Total:</label>
        <span>{totalCost} USD</span>
      </div>
      <button onClick={handleBuyStocks}>Comprar</button>
    </div>
  );
}

export default BuyStocks;
