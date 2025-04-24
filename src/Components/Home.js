import React from 'react';


import '../App.css';
import Banner from "./Banner.js"
import Card from "./Card.js";
import bannerImg from "../Bannière.jpeg" 
import { useEffect, useState } from 'react';

function Home() {
  const [housing,setHousing] = useState([])
  useEffect(() => {
    fetch("../Kasa.json") 
    .then(res => res.json())
    .then (json => setHousing(json))
  }, [])
  console.log(housing)
  return (
<div className='main'>
      <Banner imgSrc={bannerImg} imgAlt="Image Bannière" title="Chez vous, partout et ailleurs"></Banner>
      <div className='Card-zone'>
        {
          housing.map((housing) => {
            return <Card key={housing.id} title={housing.title} img={housing.cover} id={housing.id}></Card>
          })
        }
      </div>
      </div>
  )
 }
      export default Home