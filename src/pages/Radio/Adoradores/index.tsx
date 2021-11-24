import React from "react";
import Popup from "reactjs-popup";
import { Adoradores06112021 } from "./Gravacoes/2021";

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
            <div className='title'>
              Programa Adoradores
            </div>
            <div className='selection-container'>
              <ul>
                <li>
                  <Popup trigger={<button>06/11</button>}>
                    <Adoradores06112021/>
                  </Popup>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='video'>

        </div>
      </div>
    </>
  )
}

export default Adoradores;