import React from "react";
import Popup from "reactjs-popup";
import Menu from "../../components/menu/menu";

//CSS
import './index.css';

//IMAGENS
import btn_newTest from '../../images/btn_novoTestemunho.png';

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
              <span>Deixe seu testemunho!</span>
              <img src={btn_newTest}/>
            </a>
          }>
          </Popup>
        </div>
      </div>
    </>
  )
}

export default Testemunhos;