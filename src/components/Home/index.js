import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/L.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['e', 'g', 'u', 'l', 'l', 'u', 'c', 'h', 'e'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br />
            <span className={`${letterClass} _15`}>P</span>

            <span className={`${letterClass} _16`}>i</span>
            <span className={`${letterClass} _17`}>e</span>
            <span className={`${letterClass} _18`}>r</span>
            <span className={`${letterClass} _19`}>r</span>
            <span className={`${letterClass} _20`}>e</span>
            <br />
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={23}
            />
          </h1>
          <h2>Backend developer, apprentice Fullstack developer</h2>
          <br />
          <h2>
            SITE UNDER CONSTRUCTION, IMPROVEMENTS WILL BE DONE IN A FEW DAYS
            STAY TUNED !
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
