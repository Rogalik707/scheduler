import React from 'react';
import settingsIcon from '../assets/img/settings.svg';
import loupeIcon from '../assets/img/mystery.svg';
import soundIcon from '../assets/img/sound_sampler.svg';
import helpIcon from '../assets/img/help.svg';

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <img src={settingsIcon}/>
        <img src={soundIcon}/>
        <img src={loupeIcon}/>
        <img src={helpIcon}/>
      </div>
    </div>
  )
}

export default SideBar
