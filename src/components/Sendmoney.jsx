import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const Sendmoney = () => {


  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState(0);

  const handleFromAccountChange = (event) => {
    setFromAccount(event.target.value);
  };

  const handleToAccountChange = (event) => {
    setToAccount(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransferClick = async () => {
    try {
      const response = await axios.post('http://localhost:8000/transfer', { fromAccount, toAccount, amount });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <TextField label="From Account" value={fromAccount} onChange={handleFromAccountChange} />
      <TextField label="To Account" value={toAccount} onChange={handleToAccountChange} />
      <TextField label="Amount" value={amount} onChange={handleAmountChange} type="number" />
      <Button variant="contained" onClick={handleTransferClick}>Transfer Money</Button>
    </div>
  )
}

export default Sendmoney
