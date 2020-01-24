import React, { cloneElement, Children } from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import '../src/css/app.css';

const createFieldsObject = fields => {
  if (!fields) {
    return {};
  }
  return Object.keys(fields).reduce((acc, key) => {
    const value = fields[key];
    const isStringValue = typeof value === 'string';
    acc[key] = isStringValue ? { value } : value;
    return acc;
  }, {});
};

const StoryContainer = ({ storyProps, children }) => {
  const childComponents = Children.map(children, child => {
    return cloneElement(child, {
      ...storyProps,
      fields: createFieldsObject(storyProps.fields)
    });
  });
  return <>
    {childComponents}
  </>;
};

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
});

addDecorator(story => <StoryContainer storyProps={story().props}>{story()}</StoryContainer>);
addDecorator(withA11y);