import React from 'react';

//IMAGES
import logo from '../../images/logoMinisterio.png';

//CSS
import './index.css';

function redirect() {
    var i = 0;
    var timeLimit = 20000;
    var redirectLink = "/home";

    while(i<timeLimit){
        if(i<timeLimit){
            i++;
        }
    window.location.href = redirectLink;
    }
}

const Main: React.FC = () => {
    
    redirect();

    return(
        <div id="main_content">
            <img src={logo} width='500px'></img>
        </div>
    )
}

export default Main;