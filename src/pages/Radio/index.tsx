import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Menu from "../../components/menu/menu";
import Player from "../../components/player/player";

//IMAGES
import capaDespertai from '../../images/capa_despertai.jpg';
import capaAdoradores from '../../images/capa_adoradores.jpg';
import cultosGravados from '../../images/capa_cultos.png';
import capaHarpa from '../../images/capa_harpa.jpg';

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
        <div className='adoradores'>
          Programa Adoradores
          <p/>
          <img src={capaAdoradores}/>
        </div>
        <div className='despertai'>
          Programa Despertai
          <p/>
          <img src={capaDespertai}/>
        </div>
        <div className='cultos'>
          Cultos gravados
          <p/>
          <img src={cultosGravados}/>
        </div>
        <div className='harpa'>
          Harpa Cristã
          <p/>
          <img src={capaHarpa}/>
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