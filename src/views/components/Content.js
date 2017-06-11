import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,

  changeName: PropTypes.func.isRequired
};

const Content = ({ name, surname, changeName }) => (
  <div className="content">
    <button onClick={ changeName }>Update name</button>
    <br />
    <span>Full Name: { name } { surname }</span>
  </div>
);

Content.propTypes = propTypes;

export default Content;
