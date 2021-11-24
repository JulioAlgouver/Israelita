import Popup from 'reactjs-popup';
import React from "react";
import { Link } from "react-router-dom";

//COMPONENTS
import Menu from "../../../components/menu/menu";
import Player from "../../../components/player/player";

//IMAGES

//CSS
import './index.css';
import PopupContainer from '../../../components/midia-popup';
import { Despertai20112021 } from './Gravacoes/2021';

const Despertai: React.FC = () => {
  return(
    <>
      <PopupContainer>
        <Despertai20112021/>
      </PopupContainer>
    </>
  )
}

export default Despertai;