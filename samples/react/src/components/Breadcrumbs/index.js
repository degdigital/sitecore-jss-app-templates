import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Breadcrumbs = (props) => (
  <div>
    <p>Breadcrumbs Component</p>
    <Text field={props.fields.heading} />
  </div>
);

Breadcrumbs.propTypes = {
  fields: PropTypes.object.isRequired
};

Breadcrumbs.defaultProps = {
  fields: {
    heading: 'Default Heading'
  }
};

export default Breadcrumbs;
