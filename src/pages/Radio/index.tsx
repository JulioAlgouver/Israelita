import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Menu from "../../components/menu/menu";
import Player from "../../components/player/player";
import Despertai06112021 from './Gravacoes/30102021';

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
        <div className='list-videos'>
          <ul>
          <Popup trigger={<button>06/11</button>} position='right center' closeOnEscape={true} closeOnDocumentClick={true}>
              <Despertai06112021 />
          </Popup>
          </ul>
          <ul>
            <button>30/10</button>
          </ul>
        </div>
        <div className='video-container'>

        </div>
      </div>
    </div>
    </>
  )
}

export default Radio;