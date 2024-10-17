import React from 'react';
import Banner from "../Components/Banner.js"
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import bannerImg from "../Bannière.jpeg"
import Collapse from './Collapse.js';

function About () {
    return (
        <div className='Body'>
      <Header></Header>
      <Banner imgSrc={bannerImg} imgAlt="Image Bannière" title=""></Banner>
      <Collapse
    buttonText="Fiabilité" 
    paragraphText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
/>
<Collapse
    buttonText="Respect" 
    paragraphText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
/>
<Collapse 
    buttonText="Service" 
    paragraphText="" 
/>
<Collapse 
    buttonText="Sécurité" 
    paragraphText="" 
/>
      <Footer></Footer>
    </div>
    )
}

export default About
