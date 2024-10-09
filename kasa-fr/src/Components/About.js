import React from 'react';
import Banner from "../Components/Banner.js"
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import bannerImg from "../Bannière.jpeg"
import Dropdown from './Dropdown.js';

function About () {
    return (
        <div className='Body'>
      <Header></Header>
      <Banner imgSrc={bannerImg} imgAlt="Image Bannière" title=""></Banner>
      <Dropdown 
    buttonText="Fiabilité" 
    paragraphText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
/>
<Dropdown 
    buttonText="Fiabilité" 
    paragraphText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
/>
<Dropdown 
    buttonText="Fiabilité" 
    paragraphText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
/>
<Dropdown 
    buttonText="Fiabilité" 
    paragraphText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
/>
      <Footer></Footer>
    </div>
    )
}

export default About
