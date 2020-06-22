import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PullQuote = (props) => (
  <div>
    <p>PullQuote Component</p>
    <Text field={props.fields.quote} />
  </div>
);

PullQuote.propTypes = {
  fields: PropTypes.object.isRequired
};

PullQuote.defaultProps = {
  fields: {
    quote: 'Default Heading'
  }
};

export default PullQuote;
