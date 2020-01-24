import React from 'react';
import PropTypes from 'prop-types';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ContentBlock = ({ fields }) => (
  <div className="content-block">
    {fields.heading && <Text tag="h2" className="content-block__heading" field={fields.heading} />}
    {fields.content && <RichText className="content-block__description" field={fields.content} />}
  </div>
);

ContentBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

ContentBlock.defaultProps = {
  heading: 'ContentBlock Heading',
  content: 'ContentBlock Content'
};

export default ContentBlock;