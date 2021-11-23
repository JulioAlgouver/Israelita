import React from "react";
import Popup from "reactjs-popup";

//CSS
import './index.css';

const Adoradores: React.FC = () => {

  function close() {
    window.close();
  }

  return(
    <>
      <div id='popup-container'>
        <div className='list-video'>
          <div className='menu'>
            <span>Programa Adoradores</span>
            <Popup trigger={<button>20/11</button>}>

            </Popup>
          </div>
        </div>
        <div className='video'>
          teste
        </div>
      </div>
    </>
  )
}

export default Adoradores;