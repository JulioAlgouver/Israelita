import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Menu from "../../../components/menu/menu";
import Player from "../../../components/player/player";

//IMAGES
import capaDespertai from '../../images/background1.jpg';

//CSS
import './index.css';

const Despertai: React.FC = () => {



  return(
    <>
    <Menu/>
    <div id='main_radio_content'>
      <div>
        <span>web</span><strong>Radio</strong>
      </div>
      <div className='button-play'>
        <Player url='https://servidor34-4.brlogic.com:8308/live?source=website'/>
      </div>
      <div className='main_label_despertai'>
        <div className='list-video' id='list-video-container'>
          <Popup trigger={<button>06/10</button>} position='right center' closeOnEscape={true} closeOnDocumentClick={true}>
            <div id='popup-container'>

            </div>
          </Popup>
        </div>
        <div className='video' id='video-container'>

        </div>
      </div>
    </div>
    </>
  )
}

export default Despertai;


/*
<img src={capaDespertai} width='800px'/>
<span>
web
</span>
<strong>
Radio
</strong>
<Player url='https://servidor34-4.brlogic.com:8308/live?source=website'/>
<ul>

</ul>
<ul>
<button>30/10</button>
</ul>
</div>
*/