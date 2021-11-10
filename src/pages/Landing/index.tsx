import React from 'react';
import Menu from '../../components/menu/menu';

//IMAGES
import mainPhoto from '../../images/sede_1.jpg';

//CSS
import './index.css';

const Landing: React.FC = () => {
    return(
        <>
        <Menu/>
        <div id='content_landing'>
            <img src={mainPhoto}/>
        </div>
        </>
    )
}

export default Landing;