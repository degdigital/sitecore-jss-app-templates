import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { WrappedChildren } from 'Components';
import { placeholders } from 'Config';

const FooterNav = ({ rendering, children, params }) => (
  <nav className="footer-nav">
    <ul className="footer-nav__list">
      {children ?
        <WrappedChildren children={children} parentParams={params} /> :
        <Placeholder name={placeholders.footernav} rendering={rendering} params={params} />
      }
    </ul>
  </nav>
);

FooterNav.propTypes = {
  rendering: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  params: PropTypes.object
};

FooterNav.defaultProps = {
  rendering: {},
  params: {}
};

export default FooterNav;
