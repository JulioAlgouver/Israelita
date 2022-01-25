import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//CSS
import './index.css';
import PopupContainer from '../../../components/midia-popup';
import { Despertai06102021, Despertai18122021, Despertai20112021 } from './Gravacoes/2021';
import { Despertai08012022, Despertai15012022 } from './Gravacoes/2022';

const Despertai: React.FC = () => {
  return(
    <>
      <div id='popup-container'>
        <div className='list-video'>
          <div className='menu'>
            <div className='title'>
              Programa Despertai
            </div>
            <div className='selection-container'>
              <ul>
                2022
                <hr/>
                <br/>
              <li>
                  <Popup trigger={<button>15/01</button>}>
                    <Despertai15012022/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>08/01</button>}>
                    <Despertai08012022/>
                  </Popup>
                </li>
                2021
                <hr/>
                <br/>
                <li>
                  <Popup trigger={<button>18/12</button>}>
                    <Despertai18122021/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>20/11</button>}>
                    <Despertai20112021/>
                  </Popup>
                </li>
                <li>
                  <Popup trigger={<button>06/10</button>}>
                    <Despertai06102021/>
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

export default Despertai;