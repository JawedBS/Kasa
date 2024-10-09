import React, { useState, useEffect } from 'react';
import "../Styles/Dropdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ buttontext, paragraphText}) {
    // Utilisation du useState pour gérer l'état du menu déroulant et de l'icône
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état du menu déroulant
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

   

    return (
        <div className="dropdown" onClick={toggleDropdown}>
            <button className="dropdown-button" >
                {buttontext} <FontAwesomeIcon icon={faArrowUp} className={isOpen ? 'rotate' : ''} />
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <p>{paragraphText}</p>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
