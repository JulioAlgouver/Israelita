import React from "react";
import Mapa from "../../components/map/map";
import Menu from "../../components/menu/menu";

//CSS
import './index.css';

var map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115162.94992544627!2d-49.44205219543946!3d-25.57691670774865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd02f54dadbe6b%3A0xb140cbe0e164b0f4!2zQXJhdWPDoXJpYSwgUFI!5e0!3m2!1spt-BR!2sbr!4v1635971357884!5m2!1spt-BR!2sbr';

const Contato: React.FC = () => {
  return(
    <>
      <div id='main_contato'>
        <Menu/>

        <div className='map'>
        <iframe src={map}/>
        </div>
        <div className='contatos'>
          <button className='btn_sede'>
          <strong>
              Sede - Costeira
            </strong>
          </button>

          <button className='btn_vilaSandra' type='button' name='btn_vilaSandra'>
            <strong>
              Vila Sandra
            </strong>
          </button>
        </div>
      </div>
    </>
  )
}

export default Contato;