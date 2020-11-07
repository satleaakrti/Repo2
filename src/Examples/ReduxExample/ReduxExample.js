import React, { Component } from 'react';
import { render } from 'react-dom';
import CompOne from './components/CompOne';
import CompTwo from './components/CompTwo';
import './style.css';

class TestRun extends Component {
  constructor() {
    super();
    this.state = {
      appState: 1
    };
    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseAppState = this.decreaseAppState.bind(this);
  }

  increaseNumber() {
    const { appState } = this.state;

    this.setState({
      appState: appState + 1
    });
  }

  decreaseAppState() {
    const { appState } = this.state;

    this.setState({
      appState: appState - 1
    });
  }

  render() {
    const { appState } = this.state;

    return (
      <div className='TestRun'>
        <h1>React assignment #1</h1>
        <p>Current number: {appState}</p>
        <button onClick={this.increaseNumber}>Increase number</button>
        <CompOne appState={appState} decreaseAppState={this.decreaseAppState} />
        <CompTwo appState={appState} />
      </div>
    );
  }
}

export default render(TestRun);