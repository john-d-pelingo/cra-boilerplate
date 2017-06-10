import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from 'core/constants';

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px'
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px'
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px'
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px'
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px'
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px'
  }
};

function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}
function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

const propTypes = {
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  hoverColor: PropTypes.string,
  size: PropTypes.string
};

const defaultProps = {
  bgColor: 'purple',
  fontColor: 'white',
  hoverColor: 'darkBlue',
  size: 'medium'
};

const StyledButton = styled.button`
  background: ${ ({ bgColor }) => colors[bgColor] };
  border: none;
  border-radius: 2px;
  color: ${ ({ fontColor }) => colors[fontColor] };
  cursor: pointer;
  display: ${ setDisplay };
  font-size: ${ ({ size }) => buttonSizes[size]['font-size'] };
  font-weight: 200;
  line-height: ${ ({ size }) => buttonSizes[size]['line-height'] };
  margin: 8px 0;
  outline: none;
  padding: ${ ({ size }) => buttonSizes[size].padding };
  text-transform: uppercase;
  transition: all 300ms ease;
  width: ${ setWidth };
  &:hover {
    background: ${ ({ bgColor }) => darken(0.1, colors[bgColor]) };
  }
`;

StyledButton.propTypes = propTypes;
StyledButton.defaultProps = defaultProps;

export default StyledButton;
