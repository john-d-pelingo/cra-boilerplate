import React from 'react';
import PropTypes from 'prop-types';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');

  // eslint-disable-next-line no-unused-vars, react/no-deprecated
  let createClass = React.createClass;
  Object.defineProperty(React, 'createClass', {
    set: nextCreateClass => {
      createClass = nextCreateClass;
    }
  });

  whyDidYouUpdate(React);
}

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
