import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from 'Config';

const Header = ({ rendering, children }) => (
  <header className="site-header" role="banner">
    <div className="page-wrapper">
      {children || <Placeholder name={placeholders.header} rendering={rendering} />}
    </div>
  </header>
);

Header.propTypes = {
  rendering: PropTypes.object.isRequired,
  children: PropTypes.object
};

Header.defaultProps = {
  rendering: {}
};

export default Header;
