import React from 'react';
import PropTypes from 'prop-types';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ContentBlock = ({ fields }) => (
  <div className="content-block">
    {fields.text && <RichText className="content-block__description" field={fields.text} />}
  </div>
);

ContentBlock.propTypes = {
  text: PropTypes.string.isRequired
};

ContentBlock.defaultProps = {
  text: 'ContentBlock Content'
};

export default ContentBlock;