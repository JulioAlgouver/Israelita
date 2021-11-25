import React from "react";
import Popup from "reactjs-popup";
import Menu from "../../components/menu/menu";

//CSS
import './index.css'; 

const Galeria: React.FC = () => {
  return(
    <>
      <Menu/>
      <div id='main_label_galeria'>
        <div className='content'>
          <strong>Galeria de Fotos</strong>
            <div className='galeria'>
              <Popup trigger={<button></button>}>

              </Popup>
            </div>
        </div>
      </div>
    </>
  )
}

export default Galeria;