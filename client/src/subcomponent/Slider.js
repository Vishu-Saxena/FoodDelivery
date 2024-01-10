import React, { useState } from 'react'
import '../style/slider.css';
import { useFoodContext } from '../context/FoodData';
const Slider = () => {
   const{categories} = useFoodContext();
   const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const newIndex = (index + categories.length) % categories.length; // Wrap around for infinite loop
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  return(
    <div className="slider-container">
    <div className="slider">
      {categories.map((category, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          {category.CategoryName}
        </div>
      ))}
    </div>

    <div className="arrow prev" onClick={prevSlide}>&#10094;</div>
    <div className="arrow next" onClick={nextSlide}>&#10095;</div>
  </div>
  )
}

export default Slider
