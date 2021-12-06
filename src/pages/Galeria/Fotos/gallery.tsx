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

import aniversario1 from './7anos/Foto_1.jpeg';
import aniversario2 from './7anos/Foto_2.jpeg';
import aniversario3 from './7anos/Foto_3.jpeg';
import aniversario4 from './7anos/Foto_4.jpeg';
import aniversario5 from './7anos/Foto_5.jpeg';
import aniversario6 from './7anos/Foto_6.jpeg';
import aniversario7 from './7anos/Foto_7.jpeg';
import aniversario8 from './7anos/Foto_8.jpeg';
import aniversario9 from './7anos/Foto_9.jpeg';
import aniversario10 from './7anos/Foto_10.jpeg';


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
          <img src={aniversario1}></img>
          <img src={aniversario2}></img>
          <img src={aniversario3}></img>
          <img src={aniversario4}></img>
          <img src={aniversario5}></img>
          <img src={aniversario6}></img>
          <img src={aniversario7}></img>
          <img src={aniversario8}></img>
          <img src={aniversario9}></img>
          <img src={aniversario10}></img>
        </div>
      </div>   
  )
}