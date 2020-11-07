import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import '../../App.css';

class TestRun extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default TestRun;
