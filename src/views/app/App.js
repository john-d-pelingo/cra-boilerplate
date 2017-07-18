import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired
};

const defaultProps = {
  children: []
};

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <div className="header">
          <span>App Container</span>
        </div>

        <main>{ children }</main>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
