import { useRef } from 'react';
import './index.scss';
import LogoL from '../../../assets/images/L.png';

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoL}
        alt="JavaScript,  Developer"
      />
    </div>
  );
};

export default Logo;
