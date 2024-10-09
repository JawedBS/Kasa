import React from 'react';


import './App.css';
import Banner from "./Components/Banner.js"
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Card from "./Components/Card.js";
import bannerImg from "./Bannière.jpeg" 
import { useEffect, useState } from 'react';


function App() {
  const [housing,setHousing] = useState([])
  useEffect(() => {
    fetch("../Kasa.json") 
    .then(res => res.json())
    .then (json => setHousing(json))
  }, [])
  console.log(housing)
  return (
  
    <div className='Body'>
      <Header></Header>
      <div className='main'>
      <Banner imgSrc={bannerImg} imgAlt="Image Bannière" title="Chez vous, partout et ailleurs"></Banner>
      <div className='Card-zone'>
        {
          housing.map((housing) => {
            return <Card title={housing.title} img={housing.cover} id={housing.id}></Card>
          })
        }
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
