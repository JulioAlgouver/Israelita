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
import Despertai from './Despertai';
import Adoradores from './Adoradores';
import CultosGravados from './Gravacoes';

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
            <Popup trigger={<a><img src={capaAdoradores}/></a>}>
              <Adoradores/>
            </Popup>
          <p/>
          Sábado: 12h às 14h
        </div>
        <div className='despertai'>
          Programa Despertai
          <p/>
            <Popup trigger={<a><img src={capaDespertai}/></a>}>
              <Despertai/>
            </Popup>
          <p/>
          Sábado: 14h às 16h
        </div>
        <div className='cultos'>
          Cultos gravados
          <p/>
            <Popup trigger={<a><img src={cultosGravados}/></a>}>
              <CultosGravados/>
            </Popup>
          <p/>
          Assista e seja abençoado!
        </div>
        <div className='harpa'>
          Harpa Cristã
          <p/>
          <a href='https://www.harpacrista.org/' target='_blank'>
            <img src={capaHarpa}/>
          </a>
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