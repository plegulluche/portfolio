import './index.scss';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/L.png';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Pierre <br />
          <img src={LogoTitle} alt="developer" />e gulluche
          <br />
          Web developer
        </h1>
        <h2>Backend developer, apprentice Fullstack developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
