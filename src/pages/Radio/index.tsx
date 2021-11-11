import React from "react";

//COMPONENTS
import Menu from "../../components/menu/menu";
import Player from "../../components/player/player";

//IMAGES
import capaDespertai from '../../images/capa_despertai.jpg';

//CSS
import './index.css';

const Radio: React.FC = () => {
  return(
    <>
    <Menu/>
    <div id='main_radio_content'>
      <div className='capaDespertai'>
        <img src={capaDespertai}/>
      </div>
      <div className='horarios'>
        <div className='playerboard'>
        <Player url='https://servidor34-4.brlogic.com:8308/live?source=website'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Radio;