import React from "react";
import Popup from "reactjs-popup";
import Menu from "../../components/menu/menu";

//CSS
import './index.css'; 

//IMAGES
import sede from './Fotos/IgrejaSede/sede.jpg';
import vilaSandra from './Fotos/VilaSandra/vilaSandra.jpg';
import capaAniversario from './Fotos/7anos/capa.jpg';
//COMPONENTS
import {Galeria7anos, GaleriaSede, GaleriaVilaSandra} from "./Fotos/gallery";

const Galeria: React.FC = () => {
  return(
    <>
      <Menu/>
      <div id='main_label_galeria'>
        <div className='content'>
          <strong>Galeria de Fotos</strong>
            <div className='galeria'>
              <Popup trigger={<a><img src={sede}/><figcaption>Igreja Sede</figcaption></a>}>
                <GaleriaSede/>
              </Popup>

              <Popup trigger={<a><img src={vilaSandra}/><figcaption>Vila Sandra</figcaption></a>}>
                <GaleriaVilaSandra/>
              </Popup>

              <Popup trigger={<a><img src={capaAniversario}/><figcaption>7º Aniversário IEADMI</figcaption></a>}>
                <Galeria7anos/>
              </Popup>
            </div>
        </div>
      </div>
    </>
  )
}

export default Galeria;