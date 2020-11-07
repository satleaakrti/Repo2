import React, { Component } from 'react';
import CompThree from './CompThree';
import CompFour from './CompFour';

class CompTwo extends Component {
  constructor() {
    super();
    this.state = {
      compTwoState: 1
    };
    this.increaseNumber = this.increaseNumber.bind(this);
  }

  increaseNumber() {
    const { compTwoState } = this.state;
    this.setState({
      compTwoState: compTwoState + 1
    });
  }

  render() {
    const { appState } = this.props;
    const { compTwoState } = this.state;

    return <div className='comp-two'>
      <h3>CompTwo</h3>
      <p>Appstate is: {appState}</p>
      <button onClick={this.increaseNumber}>Increase CompTwo state</button>
      <p>compTwoState: {compTwoState}</p>
      <CompThree appState={appState} compTwoState={compTwoState} />
      <CompFour appState={appState} compOneState={compTwoState} />
    </div>;
  }
}

export default CompTwo;
