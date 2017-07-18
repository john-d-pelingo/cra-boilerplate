import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Content, Counter } from 'views/components';
import { idActions, idSelectors } from 'core/features/id';
import { counterActions, counterSelectors } from 'core/features/counter';

const propTypes = {
  name: PropTypes.string.isRequired,
  seconds: PropTypes.number.isRequired,
  surname: PropTypes.string.isRequired,

  changeName: PropTypes.func.isRequired,
  startCounter: PropTypes.func.isRequired,
  stopCounter: PropTypes.func.isRequired
};

export class Main extends Component {
  handleContentButtonClick = event => {
    event.preventDefault();

    const newName = {
      name: 'John Darryl',
      surname: 'Pelingo'
    };

    return this.props.changeName(newName);
  };

  handleCounterStartCounter = event => {
    event.preventDefault();

    return this.props.startCounter();
  };

  handleCounterStopCounter = event => {
    event.preventDefault();

    return this.props.stopCounter();
  };

  render() {
    const { name, seconds, surname } = this.props;

    return (
      <div className="main">
        <Content name={ name === '' ? 'John' : name } surname={ surname === '' ? 'Doe' : surname } changeName={ this.handleContentButtonClick } />
        <Counter seconds={ seconds } startCounter={ this.handleCounterStartCounter } stopCounter={ this.handleCounterStopCounter } />
      </div>
    );
  }
}

Main.propTypes = propTypes;

const mapStateToProps = createSelector(
  idSelectors.getName,
  counterSelectors.getCount,
  idSelectors.getSurname,
  (name, count, surname) => ({
    name,
    seconds: count,
    surname
  })
);

const mapDispatchToProps = {
  changeName: idActions.changeName,
  startCounter: counterActions.start,
  stopCounter: counterActions.stop
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
