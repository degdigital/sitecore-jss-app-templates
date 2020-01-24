import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Column } from 'Components';
import { placeholders } from 'Config';

const TwoColumnLayout = ({ rendering, isWideLeft, children }) => (
  <div className={`page-wrapper columns columns--${isWideLeft ? 'wide-left' : 'wide-right'}`}>
    {!children ? renderPlaceholders(isWideLeft, rendering) : renderChildren(children)}
  </div>
);

const renderPlaceholders = (isWideLeft, rendering) => {
  const placeholderNames = [
    placeholders.main,
    placeholders.sidebar
  ];
  const sortedPlaceholderNames = isWideLeft ? placeholderNames : placeholderNames.reverse();
  return sortedPlaceholderNames.map(placeholderName => (
    <Column classNames={`column--${placeholderName}`} key={`column--${placeholderName}`}>
      <Placeholder name={placeholderName} rendering={rendering} />
    </Column>
  ));
};

const renderChildren = children => (
  <>
    {children}
  </>
);

TwoColumnLayout.propTypes = {
  rendering: PropTypes.object,
  isWideLeft: PropTypes.bool.isRequired,
  children: PropTypes.array
};

TwoColumnLayout.defaultProps = {
  rendering: {},
  isWideLeft: true
};

export default TwoColumnLayout;
