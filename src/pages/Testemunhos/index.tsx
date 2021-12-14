import React from "react";
import Popup from "reactjs-popup";
import Menu from "../../components/menu/menu";

//CSS
import './index.css';

//IMAGENS
import btn_newTest from '../../images/btn_novoTestemunho.png';
import NovoTestemunho from "./New";

const Testemunhos: React.FC = () => {
  return(
    <>
      <Menu/>
      <div id='main_label_testemunhos'>
        <div className='content'>
            
        </div>
        <div className='novoTestemunho'>
          <Popup trigger={
            <a>
              <span><p>Deixe seu testemunho!</p></span>
              <br/>
              <img src={btn_newTest}/>
            </a>
          }>
            <NovoTestemunho/>
          </Popup>
        </div>
      </div>
    </>
  )
}

export default Testemunhos;