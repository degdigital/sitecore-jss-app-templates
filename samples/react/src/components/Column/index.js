import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Column = ({ classNames, children }) => (
  <div className={classnames('column', classNames)}>
    {children}
  </div>
);

Column.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.object
};

Column.defaultProps = {
  classNames: null
};

export default Column;
