import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from 'Config';

const Main = ({ rendering, children }) => (
  <>
    {children || <Placeholder name={placeholders.main} rendering={props.rendering} />}
  </>
);

Main.propTypes = {
  rendering: PropTypes.object.isRequired,
  children: PropTypes.object
};

Main.defaultProps = {
  rendering: {}
};

export default Main;
