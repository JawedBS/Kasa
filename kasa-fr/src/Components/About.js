import React from 'react';
import Banner from "../Components/Banner.js"
import bannerImg from "../Bannière.jpeg"
import Collapse from './Collapse.js';
import "../Styles/About.css"

function About () {
    return (
        <div className='Body'>
        <div className='main about-page'>
      <Banner imgSrc={bannerImg} imgAlt="Image Bannière" title=""/>
      <div className='collapse-zone'> 
      <Collapse
    buttonText="Fiabilité" 
    paragraphText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
    size="wide"
/>
<Collapse
    buttonText="Respect" 
    paragraphText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
    size="wide"
/>
<Collapse 
    buttonText="Service" 
    paragraphText="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." 
    size="wide"
    />
<Collapse 
    buttonText="Sécurité" 
    paragraphText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atelies sur la sécurité domestique pour nos hôtes" 
    size="wide"
/>
</div>
</div>
    </div>
    )
}

export default About
