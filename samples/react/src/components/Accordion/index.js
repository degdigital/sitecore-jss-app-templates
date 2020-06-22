import React from 'react';
import PropTypes from 'prop-types';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const Accordion = (props) => (
  <div>
    <p>Accordion Component</p>
    <Text field={props.fields.headline} />
    <RichText field={props.fields.description} />
  </div>
);

Accordion.propTypes = {
  fields: PropTypes.object.isRequired
};

Accordion.defaultProps = {
  fields: {
    headline: 'Default Heading',
    description: 'Default Description'
  }
};

export default Accordion;
