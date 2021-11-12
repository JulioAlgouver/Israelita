import React from "react";

//COMPONENTS
import Menu from "../../components/menu/menu";
import Player from "../../components/player/player";

//IMAGES
import capaDespertai from '../../images/background1.jpg';

//CSS
import './index.css';

const Radio: React.FC = () => {
  return(
    <>
    <Menu/>
    <div id='main_radio_content'>
      <div className='content_capa'>
        <div className='capaDespertai'>
          <img src={capaDespertai}/>
        </div>
        <div className='horarios'>
          <div className='title'>
            <span>
            web
            </span>
            <strong>
            Radio
            </strong>
          </div>
          <div className='playerboard'>
          <Player url='https://servidor34-4.brlogic.com:8308/live?source=website'/>
          </div>
        </div>
      </div>
    </div>
    <div className='grid_background'>
      <div className='grid_videos'>
        <span>Assista </span>

      </div>
    </div>
    </>
  )
}

export default Radio;