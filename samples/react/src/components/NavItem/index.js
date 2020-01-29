import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const NavItem = ({ fields, params }) => (
  <li className={params.itemClassname}>
    <Link field={fields.link} className={params.linkClassname} />
  </li>
);

NavItem.propTypes = {
  fields: PropTypes.object.isRequired,
  params: PropTypes.object
};

NavItem.defaultProps = {
  fields: {
    link: null
  },
  params: {
    itemClassname: null,
    linkClassname: null
  }
};

export default NavItem;
