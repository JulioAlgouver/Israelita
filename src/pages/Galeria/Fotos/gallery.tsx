import React from "react";

//CSS
import './gallery.css';

//IMAGES
import sede1 from './IgrejaSede/sede.jpg';
import sede2 from './IgrejaSede/sede_1.jpg';
import sede3 from './IgrejaSede/sede_2.jpg';
import sede4 from './IgrejaSede/sede_3.jpg';

import vilaSandra1 from './VilaSandra/vilaSandra.jpg';
import vilaSandra2 from './VilaSandra/vilaSandra_1.jpg';
import vilaSandra3 from './VilaSandra/vilaSandra_2.jpg';
import vilaSandra4 from './VilaSandra/vilaSandra_3.jpg';
import vilaSandra5 from './VilaSandra/vilaSandra_4.jpg';

export const GaleriaSede: React.FC = () => {
  return(
      <div id='photo-gallery-container'>
        <div className='content'>
          <img src={sede1}></img>
          <img src={sede2}></img>
          <img src={sede3}></img>
          <img src={sede4}></img>
        </div>
      </div>    
  )
}

export const GaleriaVilaSandra: React.FC = () => {
  return(
      <div id='photo-gallery-container'>
        <div className='content'>
          <img src={vilaSandra1}></img>
          <img src={vilaSandra2}></img>
          <img src={vilaSandra3}></img>
          <img src={vilaSandra4}></img>
          <img src={vilaSandra5}></img>
        </div>
      </div>   
  )
}

export const Galeria7anos: React.FC = () => {
  return(
      <div id='photo-gallery-container'>
        <div className='content'>
          <img src={vilaSandra1}></img>
          <img src={vilaSandra2}></img>
          <img src={vilaSandra3}></img>
          <img src={vilaSandra4}></img>
          <img src={vilaSandra5}></img>
        </div>
      </div>   
  )
}