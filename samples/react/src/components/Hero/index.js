import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Hero = (props) => (
  <div>
    <p>Hero Component</p>
    <Text field={props.fields.headline} />
    <Text field={props.fields.description} />
    <Image field={props.fields.image} />
  </div>
);

Hero.propTypes = {
  fields: PropTypes.object.isRequired
};

Hero.defaultProps = {
  fields: {
    headline: 'Default Heading',
    description: 'Default Description'
  }
};

export default Hero;
