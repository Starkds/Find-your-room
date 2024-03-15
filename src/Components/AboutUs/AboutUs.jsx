import React, { useEffect, useState } from 'react';
import './AboutUs.scss';

const usebackgroundImage = (images) => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage(images[Math.floor(Math.random() * images.length)]);
    }, 50000);

    return () => clearInterval(interval);
  }, [images]);

  return backgroundImage;
};

const AboutUs = () => {
  const images = [
    './images/bg-image/bg1.jpg',
    './images/bg-image/bg2.jpg',
    './images/bg-image/bg3.jpeg',
    './images/bg-image/bg4.jpg'
  ];

  const backgroundImage = usebackgroundImage(images);

  return (
    <>
    <div  style={{ backgroundImage: `url(${backgroundImage})` ,  }}
      className='AboutUs'>
      <h1>FYR</h1>
      <h2>Find Your Room</h2>
      <p>This is best platform where you can find room and house for living for rent at the best and the most afforadable price </p>
      <p> Save your time with help of us </p>
    </div>
    </>
  );
};

export default AboutUs;
