import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from 'views/styled-elements';

const propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,

  handleButtonClick: PropTypes.func.isRequired
};

const Content = ({ name, surname, handleButtonClick }) => (
  <div className="content">
    <StyledButton onClick={ handleButtonClick }>Update name</StyledButton>
    <br />
    <span>Full Name: { name } { surname }</span>
  </div>
);

Content.propTypes = propTypes;

export default Content;
