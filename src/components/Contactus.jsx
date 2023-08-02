import React, { useState } from 'react';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending the message to the backend or an email service
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  const containerStyle = {
    width: 'px',
    margin: '0 auto',
    padding: '20px',
    border: '7px navy blue',
    borderRadius: '5px',
    backgroundImage: 'url("https://i.pinimg.com/originals/fe/c1/a0/fec1a0579c728c8d26ba30cc08c98832.jpg")', // Replace with the correct image path or URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Contact US</h2>
      <h2>PHONE NO: 0722345671</h2>
      <h2>Email: propertyselling@gmail.com</h2>

    </div>
  );
};

export default Contactus;
