import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';

const SiteLogo = ({ logoTitle }) => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="" />
      {logoTitle}
    </a>
  );
};

SiteLogo.propTypes = {
  logoTitle: PropTypes.string,
};

SiteLogo.defaultProps = {
  logoTitle: 'Company Logo',
};

export default SiteLogo;
