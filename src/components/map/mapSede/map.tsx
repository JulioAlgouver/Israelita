import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/menu";

//CSS
import './map.css';

var map='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0467074473054!2d-49.378631685330134!3d-25.603364146032117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd01f7e66f6143%3A0x8396236136cf4b!2sR.%20Francisco%20Raksa%20J%C3%BAnior%2C%20155%20-%20Costeira%2C%20Arauc%C3%A1ria%20-%20PR%2C%2083709-170!5e0!3m2!1spt-BR!2sbr!4v1636118084249!5m2!1spt-BR!2sbr';

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
              Sede - Costeira
            </strong>
            </Link>
          </button>

          <button className='btn_vilaSandra' type='button' name='btn_vilaSandra'>
          <Link to ='/contato/vilaSandra' className='link'>
            <strong>
              Vila Sandra
            </strong>
          </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default MapSede;