import React from 'react';
import PropTypes from 'prop-types';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const ContentPod = (props) => (
  <div>
    <p>ContentPod Component</p>
    <Text field={props.fields.headline} />
    <Text field={props.fields.description} />
    <Link field={props.fields.link} />
    <Image field={props.fields.image} />
  </div>
);

ContentPod.propTypes = {
  fields: PropTypes.object.isRequired
};

ContentPod.defaultProps = {
  fields: {
    headline: 'Default Heading',
    description: 'Default Description'
  }
};

export default ContentPod;
