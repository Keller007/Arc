import React from 'react';
import './Home.css';
// import t from './img/1.jpg';
// import { gsap } from 'gsap';
// import '../../libs/gsap.min.js';
// import '../../libs/Draggable.min.js';
// import '../../libs/InertiaPlugin.min.js';

export const Home = () => {
  const [state, setState] = React.useState('Loading...');
  React.useEffect(() => {
    return () => {
      setState('Федор Шехтель');
    };
  }, []);
  const t = './img/1.jpg';
  return (
    <div className="wrapper">
      <h1>АРХИТЕКТОР</h1>
      <div>{state}</div>
      <div className="galllery">
        <div className="gallery__item">
          <img src={t} alt="1" />
        </div>
      </div>
    </div>
  );
};
