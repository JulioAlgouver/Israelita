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
    <img src={capaDespertai}/>
      <div className='button-play'>
        <Player url='https://servidor34-4.brlogic.com:8308/live?source=website'/>
      </div>
      <div className='main_label'>

      </div>
    </div>
    </>
  )
}

export default Radio;


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
<Popup trigger={<button>06/11</button>} position='right center' closeOnEscape={true} closeOnDocumentClick={true}>
  <Despertai06112021 />
</Popup>
</ul>
<ul>
<button>30/10</button>
</ul>
</div>
*/