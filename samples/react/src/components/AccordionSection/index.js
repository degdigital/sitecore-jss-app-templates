import React from 'react';
import PropTypes from 'prop-types';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const AccordionSection = (props) => (
  <div>
    <p>AccordionSection Component</p>
    <Text field={props.fields.headline} />
    <RichText field={props.fields.description} />
  </div>
);

AccordionSection.propTypes = {
  fields: PropTypes.object.isRequired
};

AccordionSection.defaultProps = {
  fields: {
    headline: 'Default Heading',
    description: 'Default Description'
  }
};

export default AccordionSection;
