import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Menu from "../../components/menu/menu";
import Player from "../../components/player/player";
import Despertai06102021 from './Gravacoes/06102021';

//IMAGES
import capaDespertai from '../../images/background1.jpg';

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
        </div>
        <div className='adoradores'>
          Programa Adoradores
        </div>
        <div className='cultos-sede'>
          Cultos gravados (Sede)
        </div>
        <div className='cultos-vilaSandra'>
          Cultos gravados (Vila Sandra)
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