import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'
// import { createContext, useContext, useState } from 'react';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const imgObj = useContext(ThemeContext) === 'day' ? dayImage : nightImage
  return (
    <section>
      <img  className='greenhouse-img'
            src={imgObj}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
