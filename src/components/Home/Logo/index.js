import React, { useEffect, useRef } from 'react';
import './index.scss';
import LogoS from '../../../assets/images/pp.jpg';

const Logo = () => {
  const bgRef = useRef(null);
  const solidLogoRef = useRef(null);

  useEffect(() => {
    const bgElement = bgRef.current;
    const solidLogoElement = solidLogoRef.current;

    // Fade in the background and logo
    if (bgElement) {
      bgElement.style.opacity = 1;
    }

    if (solidLogoElement) {
      solidLogoElement.style.opacity = 1;
    }
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Profile"
      />
    </div>
  );
};

export default Logo;
