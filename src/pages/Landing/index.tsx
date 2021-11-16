import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/menu/menu';
import Galeria from '../Galeria';

//IMAGES
import mainPhoto from '../../images/sede_1.jpg';
import galeria from '../../images/galeria_fotos.png';

//CSS
import './index.css';

const Landing: React.FC = () => {
    return(
        <>
        <Menu/>
        <div id='content_landing'>
            <img src={mainPhoto}/>
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