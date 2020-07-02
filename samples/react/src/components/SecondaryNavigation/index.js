import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SecondaryNavigation = (props) => (
  <div>
    <p>SecondaryNavigation Component</p>
    <Text field={props.fields.heading} />
  </div>
);

SecondaryNavigation.propTypes = {
  fields: PropTypes.object.isRequired
};

SecondaryNavigation.defaultProps = {
  fields: {
    heading: 'Default Heading'
  }
};

export default SecondaryNavigation;
