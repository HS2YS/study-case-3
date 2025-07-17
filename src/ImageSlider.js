import React, { useState } from 'react';
import './ImageSlider.css';
import image1 from './assets/img/igor-sid-152-min.jpg';
import image2 from './assets/img/igor-sid-153-min.jpg';
import image3 from './assets/img/igor-sid-asuka-min.jpg';
import image4 from './assets/img/igor-sid-malenia-min.jpg';
import image5 from './assets/img/igor-sid-marceline-copy-min.jpg';



const ImageSlider = () => {
  const images = [
    { src: image1, alt: 'Igor Sid - Artwork 152' },
    { src: image2, alt: 'Igor Sid - Artwork 153' },
    { src: image3, alt: 'Igor Sid - Asuka' },
    { src: image4, alt: 'Igor Sid - Malenia' },
    { src: image5, alt: 'Igor Sid - Marceline' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <button className="nav-button prev" onClick={prevImage}>
          ←
        </button>
        
        <div className="image-container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="slider-image"
          />
        </div>
        
        <button className="nav-button next" onClick={nextImage}>
          →
        </button>
      </div>
      
      <div className="slider-info">
        <div className="image-counter">
          Изображение {currentIndex + 1} из {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
