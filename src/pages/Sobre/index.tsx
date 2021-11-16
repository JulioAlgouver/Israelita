import React from "react";
import Menu from "../../components/menu/menu";

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
      </div>
      <div className='pastores'>
        <strong>Nossos pastores</strong>
      </div>
      <div className='cremos'>
        <strong>No que cremos</strong>
      </div>
    </div>
  </div>
  </>
  )
}

export default Sobre;