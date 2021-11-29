import React from "react";

//CSS
import './gallery.css';

//IMAGES
import foto1 from './IgrejaSede/sede.jpg';
import foto2 from './IgrejaSede/sede_1.jpg';
import foto3 from './IgrejaSede/sede_2.jpg';
import foto4 from './IgrejaSede/sede_3.jpg';

export const GaleriaSede: React.FC = () => {
  return(
      <div id='photo-gallery-container'>
        <div className='content'>
          <img src={foto1}></img>
          <img src={foto2}></img>
          <img src={foto3}></img>
          <img src={foto4}></img>
        </div>
      </div>    
  )
}

export const GaleriaVilaSandra: React.FC = () => {
  return(
      <div id='photo-gallery-container'>
        <div className='content'>

        </div>
      </div>   
  )
}