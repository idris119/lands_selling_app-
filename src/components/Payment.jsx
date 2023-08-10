// import React, { useState } from 'react';

// const Payment = () => {
//   const [amount, setAmount] = useState(0);
//   const [paymentStatus, setPaymentStatus] = useState('');

//   const handlePayment = () => {
//     // In a real-world app, you would call your backend API to initiate the payment process
//     // and interact with the payment gateway service like Stripe or PayPal.
//     // For demonstration purposes, we'll just set a success message after a short delay.
//     setTimeout(() => {
//       setPaymentStatus('success');
//     }, 2000);
//   };

//   return (
//     <div>
//       <h2>Payment</h2>
//       <div>
//         <label htmlFor="amount">Amount:</label>
//         <input
//           type="number"
//           id="amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//       </div>
//       <button onClick={handlePayment}>Pay Now</button>
//       {paymentStatus === 'success' && (
//         <p>Payment successful! Thank you for your purchase.</p>
//       )}
//     </div>
//   );
// };

// export default Payment;
// import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
// import './Payment.css';

// const PaymentForm = () => {
//   const { id } = useParams();

//   const [propertyId, setPropertyId] = useState(id);
//   const [amount, setAmount] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("mpesa");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [customerId, setCustomerId] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const customerName = `${firstName} ${lastName}`;

//     const formData = new FormData();
//     formData.append("propertyId", propertyId);
//     formData.append("amount", amount);
//     formData.append("paymentMethod", paymentMethod);
//     formData.append("customerName", customerName);
//     formData.append("customerId", customerId);
//     formData.append("contactNumber", contactNumber);
//     formData.append("email", email);
//     formData.append("location", location);

//     try {
//       const response = await fetch(`/make-${paymentMethod}-payment`, {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error making payment:", error);
//     }
//     {
//       Swal.fire(
//           'error',
//           response.error,
//           'error'
//         )
//   }
//   else if(response.success)
//   { 
//       nav("/")
//       Swal.fire(
//           'success',
//           response.success,
//           'success'
//         )
//         setonChange(!onChange)


//   }
//   else{
//       Swal.fire(
//           'Error',
//           "Something went wrong",
//           'error'
//         )
//   }

// })
//   };

//   return (
//     <div className="payment-form-container">
//       <h1 className="form-title">Property Purchase</h1>
//       <form className="payment-form" onSubmit={handleSubmit}>
//         <label htmlFor="propertyId">Property ID:</label>
//         <input
//           type="text"
//           id="propertyId"
//           value={propertyId}
//           onChange={(e) => setPropertyId(e.target.value)}
//           required
//         />

//         <label htmlFor="amount">Amount:</label>
//         <input
//           type="number"
//           id="amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//         />

//         <label htmlFor="paymentMethod">Payment Method:</label>
//         <select
//           id="paymentMethod"
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//           required
//         >
//           <option value="mpesa">M-Pesa</option>
//           <option value="visa">Visa</option>
//           <option value="paypal">PayPal</option>
//         </select>

//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />

//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />

//         <label htmlFor="customerId">Customer ID:</label>
//         <input
//           type="text"
//           id="customerId"
//           value={customerId}
//           onChange={(e) => setCustomerId(e.target.value)}
//           required
//         />

//         <label htmlFor="contactNumber">Contact Number:</label>
//         <input
//           type="text"
//           id="contactNumber"
//           value={contactNumber}
//           onChange={(e) => setContactNumber(e.target.value)}
//           required
//         />

//         <label htmlFor="email">Email Address:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />

//         <button className="submit-button" type="submit">Submit Payment</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;

import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import Swal for displaying alerts
import './Payment.css';

const PaymentForm = () => {
  const { id } = useParams();

  const [propertyId, setPropertyId] = useState(id);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const customerName = `${firstName} ${lastName}`;

    const formData = new FormData();
    formData.append("propertyId", propertyId);
    formData.append("amount", amount);
    formData.append("paymentMethod", paymentMethod);
    formData.append("customerName", customerName);
    formData.append("customerId", customerId);
    formData.append("contactNumber", contactNumber);
    formData.append("email", email);
    formData.append("location", location);

    try {
      const response = await fetch(`/make-${paymentMethod}-payment`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);

      if (data.error) {
        Swal.fire('error', data.error, 'error');
      } else if (data.success) {
        Swal.fire('success', data.success, 'success');
        // Redirect or update state as needed
      } else {
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    } catch (error) {
      console.error("Error making payment:", error);
    }
  };

  return (
    <div className="payment-form-container">
      <h1 className="form-title">Property Purchase</h1>
      <form className="payment-form" onSubmit={handleSubmit}>
        {/* Input fields */}
        {/* ... */}
        <label htmlFor="propertyId">Property ID:</label>
<input
          type="text"
          id="propertyId"
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="mpesa">M-Pesa</option>
          <option value="visa">Visa</option>
          <option value="paypal">PayPal</option>
        </select>

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="customerId">Customer ID:</label>
        <input
          type="text"
          id="customerId"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        
        <button className="submit-button" type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;
