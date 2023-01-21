/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title, children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0px',
    }}
  >
    <div
      style={{ fontSize: '24px' }}
    >
      {title}
    </div>
    {children}
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageTitle.defaultProps = {
  children: null,
};

export default PageTitle;
