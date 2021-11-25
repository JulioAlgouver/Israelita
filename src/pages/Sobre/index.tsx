import React from "react";
import Menu from "../../components/menu/menu";

//IMAGES
import sede from '../../images/sede_fachada.jpg';
import pastores from '../../images/pastores.jpg';
import cremos from '../../images/cremos.png';

//CSS
import './index.css';

const Sobre: React.FC = () =>{
  return(
  <>
  <Menu/>
  <div id='main_label_sobre'>
    <div className='content'>
      <div className='sobre'>
        <strong>Nossa história</strong>
        <div className='foto'>
          <img src={sede}/>
        </div>
      </div>
      <div className='pastores'>
        <strong>Nossos pastores</strong>
        <div className='foto'>
          <img src={pastores}/>
        </div>
      </div>
      <div className='cremos'>
        <strong>No que cremos</strong>
        <p/>
        <img src={cremos}/>
      </div>
    </div>
  </div>
  </>
  )
}

export default Sobre;