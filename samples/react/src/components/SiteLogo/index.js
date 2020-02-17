import React from 'react';
import logo from '../../images/logo.svg';

const SiteLogo = () => {
  return (
    <a href="/" className="logo">
      <img
        src={logo}
        alt=""
        style={{
          width: '160px',
        }}
      />
    </a>
  );
};

export default SiteLogo;
