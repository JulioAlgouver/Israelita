import React from "react";
import Popup from "reactjs-popup";
import Menu from "../../components/menu/menu";

//CSS
import './index.css'; 

//IMAGES
import sede from './Fotos/IgrejaSede/sede.jpg';
import vilaSandra from './Fotos/VilaSandra/vilaSandra.jpg';

const Galeria: React.FC = () => {
  return(
    <>
      <Menu/>
      <div id='main_label_galeria'>
        <div className='content'>
          <strong>Galeria de Fotos</strong>
            <div className='galeria'>
              <Popup trigger={<a><img src={sede}/><figcaption>Igreja Sede</figcaption></a>}>

              </Popup>

              <Popup trigger={<a><img src={vilaSandra}/><figcaption>Vila Sandra</figcaption></a>}>

              </Popup>

              <Popup trigger={<a><img src=''/></a>}>

              </Popup>

              <Popup trigger={<a><img src=''/></a>}>

              </Popup>

              <Popup trigger={<a><img src=''/></a>}>

              </Popup>

              <Popup trigger={<a><img src=''/></a>}>

              </Popup>
            </div>
        </div>
      </div>
    </>
  )
}

export default Galeria;