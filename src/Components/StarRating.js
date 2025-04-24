import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import '../Styles/StarRating.css'; 

const StarRating = ({ rating, maxStars = 5 }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: maxStars }, (_, index) => {
         const starClass = index < rating ? 'star-red' : 'star-gray';
         return(
        <FontAwesomeIcon 
          key={index} 
          icon={faSolidStar}
          className={`star-icon ${starClass}`}
        />
         );
})}
    </div>
  );
};

export default StarRating;
