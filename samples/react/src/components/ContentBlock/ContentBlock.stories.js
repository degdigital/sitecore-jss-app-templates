import React from 'react';
import { default as Component } from './index.js';

export default {
    title: 'Components/Content Block'
};

const fields = {
    heading: {
        value: 'Sample Heading'
    },
    content: {
        value: 'Content Block'
    }
};

export const component = () => <Component fields={fields} />;

component.story = {
    name: 'Example'
};
