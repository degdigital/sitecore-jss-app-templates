import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Testimonial = (props) => (
  <div>
    <p>Testimonial Component</p>
    <Text field={props.fields.headline} />
    <Text field={props.fields.description} />
    <Image field={props.fields.image} />
    <Text field={props.fields.name} />
    <Text field={props.fields.quote} />
    <Text field={props.fields.jobTitle} />
    <Text field={props.fields.company} />
  </div>
);

Testimonial.propTypes = {
  fields: PropTypes.object.isRequired
};

Testimonial.defaultProps = {
  fields: {
    headline: 'Default Heading',
    description: 'Default Description',
    name: 'Default Name',
    quote: 'Default Quote',
    jobTitle: 'Default Job Title',
    company: 'Default Company'
  }
};

export default Testimonial;
