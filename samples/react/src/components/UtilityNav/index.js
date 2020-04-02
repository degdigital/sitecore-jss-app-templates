import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { WrappedChildren } from '@components';
import { placeholders } from '@config';

const UtilityNav = ({ rendering, children, params }) => (
  <nav className="utility-nav">
    <ul className="utility-nav__list">
      {children ?
        <WrappedChildren children={children} parentParams={params} /> :
        <Placeholder name={placeholders.utilitynav} rendering={rendering} params={params} />
      }
    </ul>
  </nav>
);

UtilityNav.propTypes = {
  rendering: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  params: PropTypes.object
};

UtilityNav.defaultProps = {
  rendering: {},
  params: {}
};

export default UtilityNav;
