import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/menu";

//CSS
import './map.css';

var map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.854199960594!2d-49.37670692024592!3d-25.603060809908655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd0185d4afe0cd%3A0x4744455449c473fc!2sIgreja%20Evang%C3%A9lica%20Assembl%C3%A9ia%20de%20Deus%20-%20Minist%C3%A9rio%20Israelita!5e0!3m2!1spt-BR!2sbr!4v1636143909590!5m2!1spt-BR!2sbr';

const MapSede: React.FC = () => {
  return(
    <>
      <div id='main_contato'>
        <Menu/>

        <div className='map'>
        <iframe src={map}/>
        </div>
        <div className='contatos'>

          <button className='btn_sede' type='button' name='btn_sede'>
          <Link to ='/contato/sede' className='link'>
            <strong>
              Sede - Costeira<br/>
            </strong>
            <div className='endereco'>
                <span>
                  Rua Francisco Raksa Junior, 167<br/>
                  Costeira - Araucária<br/>
                  CEP: 83709-170<br/>
                </span>
              </div>
            </Link>
          </button>

          <button className='btn_vilaSandra' type='button' name='btn_vilaSandra'>
          <Link to ='/contato/vilaSandra' className='link'>
            <strong>
              Vila Sandra<br/>
            </strong>
            <div className='endereco'>
              <span>
                Rua Cidade de Pomerode, 491<br/>
                CIC - Curitiba<br/>
                CEP: 81230-130<br/>
              </span>
            </div>
          </Link>
          </button>

          <div className='imagem_igreja'>

          </div>
        </div>
      </div>
    </>
  )
}

export default MapSede;