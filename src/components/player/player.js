import React, { useState, useEffect } from "react";

//IMAGES
import playButton from '../../images/play_radio.png';
import pauseButton from '../../images/pause_radio.png';

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

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className='button-play'>
      <button onClick={toggle}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;