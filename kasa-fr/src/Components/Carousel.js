import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Passer à l'image précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    // Passer à l'image suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="carousel-image"
            />
            <button onClick={prevSlide} className="carousel-button carousel-button-prev">
            <img src="../ArrowLeft.png"/>
            </button>
            <button onClick={nextSlide} className="carousel-button carousel-button-next">
            <img src="../ArrowRight.png"/>
            </button>
            <div className="carousel-indicator">
                {currentIndex + 1} / {pictures.length}
            </div>
        </div>
    );
};

export default Carousel;