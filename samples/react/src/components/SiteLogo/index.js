import React from 'react';
import logo from '../../images/logo.svg';

const SiteLogo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Company Logo" />
    </a>
  );
};

export default SiteLogo;
