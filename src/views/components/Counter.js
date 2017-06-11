import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  seconds: PropTypes.number.isRequired,

  startCounter: PropTypes.func.isRequired,
  stopCounter: PropTypes.func.isRequired
};

const Counter = ({ seconds, startCounter, stopCounter }) => (
  <div className="counter">
    <button onClick={ startCounter }>Start Counter</button>
    &nbsp;&nbsp;&nbsp;
    <button onClick={ stopCounter }>Stop Counter</button>
    <br />
    <span>{ seconds }</span>
  </div>
);

Counter.propTypes = propTypes;

export default Counter;
