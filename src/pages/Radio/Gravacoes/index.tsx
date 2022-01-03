import Popup from 'reactjs-popup';
import React from "react";

//CSS
import './index.css';
import { Abertura7Aniversario, CultoAnoNovo2022, CultoEvangelismo26122021, CultoNatal, Encerramento7Aniversario, Primicias07112021 } from './2021';

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

                2021
                <hr/>
                <br/>
                <li>
                  <Popup trigger={<button>31/12</button>}>
                    <CultoAnoNovo2022/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>26/12</button>}>
                    <CultoEvangelismo26122021/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>23/12</button>}>
                    <CultoNatal/>
                  </Popup>
                </li>
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