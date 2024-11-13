import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import '../Styles/StarRating.css'; 

const StarRating = ({ rating, maxStars = 5 }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: maxStars }, (_, index) => (
        <FontAwesomeIcon 
          key={index} 
          icon={index < rating ? faSolidStar : faRegularStar}  
          className={`star-icon ${index >= rating ? 'regular-star' : ''}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
