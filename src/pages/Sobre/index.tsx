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
        A história de nosso ministério
      </div>
      <div className='pastores'>
        <strong>Nossos pastores</strong>
      </div>
    </div>
  </div>
  </>
  )
}

export default Sobre;