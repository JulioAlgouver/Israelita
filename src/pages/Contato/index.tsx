import React from "react";
import Mapa from "../../components/map/map";
import Menu from "../../components/menu/menu";

import './index.css';

const Contato: React.FC = () => {
  return(
    <>
      <div id='main_contato'>
        <Menu/>

        <div className='map'>
        <Mapa/>
        </div>
        <div className='contatos'>

        </div>
      </div>
    </>
  )
}

export default Contato;