import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/menu";

//CSS
import './map.css';

var map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.5381438357324!2d-49.34317660865014!3d-25.465027302793064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3d69b29c8c5%3A0xf39660219cd0c23e!2sIgreja%20Evang%C3%A9lica%20Assembl%C3%A9ia%20de%20Deus%20Vila%20Sandra%20(CIC)%20em%20Curitiba%20-%20Minist%C3%A9rio%20Israelita!5e0!3m2!1spt-BR!2sbr!4v1636118509821!5m2!1spt-BR!2sbr';

const MapVilaSandra: React.FC = () => {
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
      </div>
    </div>
  </>
  )
}

export default MapVilaSandra;