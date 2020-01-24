import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from 'Config';

const Sidebar = ({ rendering, children }) => (
  <>
    {children || <Placeholder name={placeholders.sidebar} rendering={rendering} />}
  </>
);

Sidebar.propTypes = {
  rendering: PropTypes.object.isRequired,
  children: PropTypes.object
};

Sidebar.defaultProps = {
  rendering: {}
};

export default Sidebar;