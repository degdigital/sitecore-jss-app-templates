import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HeaderSearch = (props) => (
  <div>
    <p>HeaderSearch Component</p>
    <Text field={props.fields.heading} />
  </div>
);

HeaderSearch.propTypes = {
  fields: PropTypes.object.isRequired
};

HeaderSearch.defaultProps = {
  fields: {
    heading: 'Default Heading'
  }
};

export default HeaderSearch;
