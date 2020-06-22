import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SocialSharing = (props) => (
  <div>
    <p>SocialSharing Component</p>
    <Text field={props.fields.label} />
  </div>
);

SocialSharing.propTypes = {
  fields: PropTypes.object.isRequired
};

SocialSharing.defaultProps = {
  fields: {
    label: 'Default Heading'
  }
};

export default SocialSharing;
