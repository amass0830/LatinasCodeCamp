import React, { useState } from 'react';
import './App.css';

function DepositFunds({ cash, setCash }) {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event) => {
    const newAmount = parseFloat(event.target.value) || 0;
    setAmount(newAmount);
  };

  const handleDeposit = () => {
    if (amount <= 0) {
      alert('El monto ingresado es inválido.');
      return;
    }

    const updatedCash = cash + amount;
    setCash(updatedCash);

    setAmount(0);
  };

  return (
    <div>
      <h2>Depositar Fondos</h2>
      <div>
        <label>Monto a depositar:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleDeposit}>Depositar</button>
    </div>
  );
}

export default DepositFunds;
