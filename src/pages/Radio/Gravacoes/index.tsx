import Popup from 'reactjs-popup';
import React from "react";

//CSS
import './index.css';
import { Abertura7Aniversario, Encerramento7Aniversario, Primicias07112021 } from './2021';

const CultosGravados: React.FC = () => {
  return(
    <>
      <div id='popup-container'>
        <div className='list-video'>
          <div className='menu'>
            <div className='title'>
              Cultos Gravados
            </div>
            <div className='selection-container'>
              <ul>
                <li>
                  <Popup trigger={<button>05/12</button>}>
                    <Encerramento7Aniversario/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>04/12</button>}>
                    <Abertura7Aniversario/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>07/11</button>}>
                    <Primicias07112021/>
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

export default CultosGravados;