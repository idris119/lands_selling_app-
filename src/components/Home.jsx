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
    },
    heading: {
      fontSize: '40px',
      color: 'navy',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
    },
    content: {
      
      margin: '20px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to the Property Selling App</h1>
        
      </div>
    </div>
  );
};

export default HomePage;
