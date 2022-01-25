import React from "react";
import Popup from "reactjs-popup";
import PopupContainer from "../../../components/midia-popup";
import { Adoradores06112021, Adoradores13112021, Adoradores18122021 } from "./Gravacoes/2021";
import { Adoradores08012022, Adoradores15012022 } from "./Gravacoes/2022";

//CSS
import './index.css';

const Adoradores: React.FC = () => {

  function close() {
    window.close();
  }

  return(
    <>
    <PopupContainer/>
      <div id='popup-container'>
        <div className='list-video'>
          <div className='menu'>
            <div className='title'>
              Programa Adoradores
            </div>
            <div className='selection-container'>
              <ul>
                2022
                <hr/>
                <br/>
                <li>
                  <Popup trigger={<button>15/01</button>}>
                    <Adoradores15012022/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>08/01</button>}>
                    <Adoradores08012022/>
                  </Popup>
                </li>
                2021
                <hr/>
                <br/>
                <li>
                  <Popup trigger={<button>18/12</button>}>
                    <Adoradores18122021/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>13/11</button>}>
                    <Adoradores13112021/>
                  </Popup>
                </li>
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