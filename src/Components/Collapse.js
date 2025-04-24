import React, { useState} from 'react';
import "../Styles/Collapse.css";
import arrowBack from '../arrow_back.png';
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

function Collapse({ buttonText, paragraphText, size }) {
    // Utilisation du useState pour gérer l'état du menu déroulant et de l'icône
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état du menu déroulant
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const collapseClass = size === 'wide' ? 'collapse wide' : 'collapse narrow';

    return (
        <div className={collapseClass} onClick={toggleCollapse}>
            <button className="collapse-button" >
                <p className='buttonText'>{buttonText}</p>  
                <img 
                    src={arrowBack} 
                    alt="Toggle Arrow" 
                    className={`collapse-arrow ${isOpen ? 'rotate' : ''}`} 
                />
            </button>
            {isOpen && (
                <div className="collapse-content">
                    <p className='collapse-text'>{paragraphText}</p>
                </div>
            )}
        </div>
    );
}

export default Collapse;
