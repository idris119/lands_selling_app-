import React, { useState } from 'react';

const Payment = () => {
  const [amount, setAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = () => {
    // In a real-world app, you would call your backend API to initiate the payment process
    // and interact with the payment gateway service like Stripe or PayPal.
    // For demonstration purposes, we'll just set a success message after a short delay.
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  return (
    <div>
      <h2>Payment</h2>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentStatus === 'success' && (
        <p>Payment successful! Thank you for your purchase.</p>
      )}
    </div>
  );
};

export default Payment;