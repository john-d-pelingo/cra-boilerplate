import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Content } from 'views/components';
import { idActions, idSelectors } from 'core/id';

const propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,

  changeName: PropTypes.func.isRequired
};

export class Main extends Component {
  handleButtonClick = event => {
    event.preventDefault();

    const newName = {
      name: 'John Darryl',
      surname: 'Pelingo'
    };

    return this.props.changeName(newName);
  };

  render() {
    const { name, surname } = this.props;

    return (
      <div className="main">
        <Content name={ name === '' ? 'John' : name } surname={ surname === '' ? 'Doe' : surname } handleButtonClick={ this.handleButtonClick } />
      </div>
    );
  }
}

Main.propTypes = propTypes;

const mapStateToProps = createSelector(
  idSelectors.getName,
  idSelectors.getSurname,
  (name, surname) => ({
    name,
    surname
  })
);

const mapDispatchToProps = {
  changeName: idActions.changeName
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
