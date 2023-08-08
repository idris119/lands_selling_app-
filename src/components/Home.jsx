import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://hips.hearstapps.com/hmg-prod/images/sportscars100k-1588775921.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
    'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2962775/pexels-photo-2962775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://media.gettyimages.com/id/1284622508/photo/suv-cars-on-a-parking.jpg?s=612x612&w=0&k=20&c=S1Pz5_HRncc1vH6Wr4XCb1ols9Mhy5KAYFgX-b_WOb0=',
    'https://i.roamcdn.net/prop/brk/listing-medium-600w-watermark/ba9e622f835e8d921c4661a63714f424/-/prod-property-core-backend-media-brk/5478521/788ea7a5-752a-4991-8569-be9d3d0df499.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      {/* ... (carousel indicators, items, and controls) ... */}
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img
              src={image}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ maxWidth: '100%', height: '700px' }}
            />
            {/* ... (carousel caption) ... */}
          </div>
        ))}
      </div>
      {/* ... (carousel controls) ... */}
    </div>
  );
};

export default HomePage;