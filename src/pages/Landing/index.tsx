import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu/menu';
import Galeria from '../Galeria';

//IMAGES
import mainPhoto from '../../images/sede_1.jpg';
import galeria from '../../images/galeria_fotos.png';
import btnHarpa from '../../images/btn_harpa.png';
import btnBiblia from '../../images/btn_biblia.png';


//CSS
import './index.css';

const Landing: React.FC = () => {
    return(
        <>
        <Menu/>
        <div id='content_landing'>
            <img src={mainPhoto}/>
            <div className='bottom_menu'>
                <a href='https://www.bibliaonline.com.br/acf/index' target='_blank' className='link_biblia'>
                    <img src={btnBiblia}/>
                </a>
                <a href='https://www.harpacrista.org/' target='_blank' className='link_harpa'>
                    <img src={btnHarpa}/>
                </a>
            </div>
            <button className='btn_galeria'>
                <Link to='/galeria'>
                    <img src={galeria}/>
                </Link>
            </button>
        </div>
        </>
    )
}

export default Landing;