import { Children, cloneElement } from 'react';

const WrappedChildren = ({ children, parentParams }) =>
  Children.map(children, child => cloneElement(child, {
    ...child.props,
    params: {
      ...child.props.params,
      ...parentParams
    }
  }));

export default WrappedChildren;
