import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Menu from "../../components/menu/menu";
import Player from "../../components/player/player";

//IMAGES
import capaDespertai from '../../images/capa_despertai.jpg';

//CSS
import './index.css';

const Midia: React.FC = () => {
  return(
    <>
    <Menu/>
    <div id='main_radio_content'>
      <div className='menu'>
        <span>web</span><strong>Radio</strong>
        <div className='button-play'>
          <Player url='https://servidor34-4.brlogic.com:8308/live?source=website'/>
        </div>
      </div>
      <div className='main_label'>
        <div className='despertai'>
          Programa Despertai
          <p/>
          <img src={capaDespertai}/>
        </div>
        <div className='adoradores'>
          Programa Adoradores
          <p/>
        </div>
        <div className='cultos-sede'>
          Cultos gravados
          <p/>
        </div>
        <div className='cultos-vilaSandra'>
          Harpa Cristã
          <p/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Midia;


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