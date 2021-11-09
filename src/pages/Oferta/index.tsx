import React from "react";

//COMPONENTS
import Menu from "../../components/menu/menu";
import PIX from '../../images/pix.svg';

//CSS
import './index.css';

const Oferta: React.FC = () => {
  return(
    <>
    <Menu/>
    <div id='main_content_oferta'>
      <span>
        Faça sua doação de modo fácil e rápido através de nossa chave PIX:<p/>
      </span>
      <img src={PIX} width='300px'/><p/>
      <strong>
        E-mail<br/>
      </strong>
      <span className='chavePIX'>
        ieadisraelita@hotmail.com<p/>
      </span>
      <div className='versiculo'>
        Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria. <br/>2 Coríntios 9:7<br/>
      </div>
    </div>
    </>
  )
}

export default Oferta;