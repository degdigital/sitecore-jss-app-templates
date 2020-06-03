import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ fields, params }) => (
  <li className={params.itemClassname}>
    Link
  </li>
);

NavItem.propTypes = {
  fields: PropTypes.object.isRequired,
  params: PropTypes.object
};

NavItem.defaultProps = {
  params: {
    itemClassname: null,
    linkClassname: null
  }
};

export default NavItem;
