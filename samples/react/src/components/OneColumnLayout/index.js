import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { placeholders } from 'Config';

const OneColumnLayout = ({ rendering, children }) => (
  <>
    {children || <Placeholder name={placeholders.main} rendering={rendering} />}
  </>
);

OneColumnLayout.propTypes = {
  rendering: PropTypes.object.isRequired,
  children: PropTypes.object
};

OneColumnLayout.defaultProps = {
  rendering: {}
};

export default OneColumnLayout;
