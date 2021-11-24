import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//CSS
import './index.css';
import PopupContainer from '../../../components/midia-popup';
import { Despertai06102021, Despertai20112021 } from './Gravacoes/2021';

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
                <li>
                  <Popup trigger={<button>20/11</button>}>
                    <Despertai20112021/>
                  </Popup>
                </li>
              <br/>
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