import React, { useState, useEffect, Component } from "react";

//IMAGES
import playButton from '../../images/play_radio.png';
import pauseButton from '../../images/pause_radio.png';

//API
import apiRadio from "../../services/api";

//CSS
import './player.css';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(
    () => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  return [playing, toggle];
};

const showName = () => {

}

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <>
      <div id='button-play'>
        <button onClick={toggle} className='Button'>
          {playing ? <img src={pauseButton} className='pauseButton'/> : <img src={playButton} className='playButton'/>}
        </button>
      </div>
      <div className="player-timeline">
        <div className="player-timeline-control">

        </div>
      </div>
      <div className="player-display">
        
      </div>
    </>
  );
};

export default Player;