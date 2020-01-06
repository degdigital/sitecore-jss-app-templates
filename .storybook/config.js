import React, { cloneElement, Children } from 'react';
import { configure, addDecorator } from '@storybook/react';
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
    const childComponents = Children.map(children, child => cloneElement(child, {
        ...storyProps,
        fields: createFieldsObject(storyProps.fields)
    }));
    return <>
        {childComponents}
    </>;
};

addDecorator(story => <StoryContainer storyProps={story().props}>{story()}</StoryContainer>);


// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
