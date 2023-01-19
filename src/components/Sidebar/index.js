import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import L from '../../assets/images/L.png';
import LogoName from '../../assets/images/Logo_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={L} alt="logo" />
      <img className="sub-logo " src={LogoName} alt="Pierre Le gulluche" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/pierre-le-gulluche/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/plegulluche?tab=repositories"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
