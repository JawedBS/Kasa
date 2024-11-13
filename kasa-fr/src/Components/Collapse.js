import React, { useState} from 'react';
import "../Styles/Collapse.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

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
                {buttonText} <FontAwesomeIcon icon={faArrowUp} className={isOpen ? 'rotate' : ''} />
            </button>
            {isOpen && (
                <div className="collapse-content">
                    <p>{paragraphText}</p>
                </div>
            )}
        </div>
    );
}

export default Collapse;
