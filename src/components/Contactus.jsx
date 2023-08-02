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
    width: '2000px', // Set the width of the container
    margin: '0 auto', // Center the container horizontally
    padding: '20px', // Add some padding to the content inside the container
    border: '10px solid #ccc', // Add a border around the container
    borderRadius: '70px', // Round the container edges
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow to the container
    backgroundColor: 'blue', // Set the background color of the container
    backgroundImage: 'url("https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY=")',
  };
  
  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: 0 }}>Contact US</h2>
      <h2>PHONE NO: 0722345671</h2>
      <h2>Email: propertyselling@gmail.com</h2>
    </div>
  );
  }  

export default Contactus;
