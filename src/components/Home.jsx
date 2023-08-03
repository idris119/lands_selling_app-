import React from 'react';

const HomePage = () => {
  // Define your background image URL
  const backgroundImageURL = 'https://cdn.xxl.thumbs.canstockphoto.com/property-mark-on-hand-with-blue-background-stock-photograph_csp29643092.jpg';

  // Define your inline styles
  const styles = {
    container: {
      backgroundImage: `url(${backgroundImageURL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif', // Replace with your desired font family
    },
    content: {
      margin: '20px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px', // Limit the width to make it more readable on larger screens
      textAlign: 'center', // Center the content inside the container
    },
    heading: {
      fontSize: '40px',
      color: 'navy',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      marginBottom: '20px', // Add some space below the heading
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      color: '#fff',
      backgroundColor: 'navy',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.2s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to the Property Selling App</h1>
        <p>
          This is a platform where you can buy and sell properties easily. 
          Sign up now to get started!
        </p>
      
      </div>
    </div>
  );
};

export default HomePage;