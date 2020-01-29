import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { WrappedChildren } from 'Components';
import { placeholders } from 'Config';

const PrimaryNav = ({ rendering, children, params }) => (
  <nav className="primary-nav">
    <ul className="primary-nav__list">
      {children ?
        <WrappedChildren children={children} parentParams={params} /> :
        <Placeholder name={placeholders.primarynav} rendering={rendering} params={params} />
      }
    </ul>
  </nav>
);

PrimaryNav.propTypes = {
  rendering: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  params: PropTypes.object
};

PrimaryNav.defaultProps = {
  rendering: {},
  params: {}
};

export default PrimaryNav;
