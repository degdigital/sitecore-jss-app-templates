import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from 'Config';

const Footer = ({ rendering, children }) => (
  <footer className="site-footer" role="contentinfo">
    <div className="page-wrapper">
      {children || <Placeholder name={placeholders.footer} rendering={rendering} />}
    </div>
  </footer>
);

Footer.propTypes = {
  rendering: PropTypes.object.isRequired,
  children: PropTypes.object
};

Footer.defaultProps = {
  rendering: {}
};

export default Footer;
