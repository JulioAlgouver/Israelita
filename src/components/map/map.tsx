import React from "react";

//CSS
import './map.css'

const Mapa: React.FC = () => {
  return(
    <>
    <div id='main_map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1272.1023054408467!2d-49.37707924776662!3d-25.603299055497565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd01f7e76c6a9b%3A0xf43d659976a20db!2sR.%20Francisco%20Raksa%20J%C3%BAnior%2C%20167%20-%20Costeira%2C%20Arauc%C3%A1ria%20-%20PR%2C%2083709-170!5e0!3m2!1spt-BR!2sbr!4v1635969587317!5m2!1spt-BR!2sbr"/>
    </div>
    </>
  )
}

export default Mapa;