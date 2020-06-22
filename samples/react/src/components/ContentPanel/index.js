import React from 'react';
import PropTypes from 'prop-types';
import { Text, RichText, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const ContentPanel = (props) => (
  <div>
    <p>ContentPanel Component</p>
    <Text field={props.fields.headline} />
    <RichText field={props.fields.body} />
    <Link field={props.fields.link} />
    <Image field={props.fields.image} />
  </div>
);

ContentPanel.propTypes = {
  fields: PropTypes.object.isRequired
};

ContentPanel.defaultProps = {
  fields: {
    headline: 'Default Heading',
    body: 'Default Body',    
  }
};

export default ContentPanel;
