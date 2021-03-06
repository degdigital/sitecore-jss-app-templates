import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from '@config';

const Main = ({ rendering, children }) => (
  <>
    {children || <Placeholder name={placeholders.main} rendering={rendering} />}
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
