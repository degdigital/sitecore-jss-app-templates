import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ContentPodGroup = (props) => (
  <div>
    <p>ContentPodGroup Component</p>
    <Text field={props.fields.heading} />
  </div>
);

ContentPodGroup.propTypes = {
  fields: PropTypes.object.isRequired
};

ContentPodGroup.defaultProps = {
  fields: {
    heading: 'Default Heading'
  }
};

export default ContentPodGroup;
