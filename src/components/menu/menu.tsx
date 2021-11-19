import React from "react";
import {Link} from 'react-router-dom';

//IMAGES
import logo from '../../images/logoMinisterio.png';

//CSS
import './menu.css';

const Menu: React.FC = () => {
  return(
    <div id="main_landing">
            <div className="header">
                <div className="logo">
                    <h6>
                    <img src={logo}/>
                    IGREJA EVANGÉLICA ASSEMBLÉIA DE DEUS<br/>
                    MINISTÉRIO ISRAELITA
                    </h6>
                </div>
                <div className="menu">
                        <button>
                            <Link to="/home" className="linkHome">Home</Link>
                        </button>

                        <button>
                            <Link to="/sobre" className="linkHome">Sobre</Link>
                        </button>
                        
                        <button>
                            <Link to="/agenda" className="linkHome">Agenda 2022</Link>
                        </button>

                        <button>    
                            <Link to="/cultos" className="linkHome">Nossos cultos</Link>
                        </button>

                        <button>    
                            <Link to="/midia" className="linkHome">Mídia</Link>
                        </button>

                        <button>    
                            <Link to="/testemunhos" className="linkHome">Testemunhos</Link>
                        </button>

                        <button>
                            <Link to="/oferta" className="linkHome">Oferta</Link>
                        </button>

                        <button>
                            <Link to="/contato" className="linkHome">Contato</Link>
                        </button>
                </div>
            </div>
        </div>
  )
}

export default Menu;