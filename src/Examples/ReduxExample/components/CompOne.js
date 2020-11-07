import React, { Component } from 'react';
import CompFour from './CompFour';

class CompOne extends Component {
  constructor() {
    super();
    this.state = {
      compOneState: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      compOneState: e.target.value      
    });
  }

  render() {
    const { appState } = this.props;
    const { compOneState } = this.state;

    return <div className='comp-one'>
      <h3>CompOne</h3>
      <p>Appstate is: {appState}</p>
      <div>
        <button onClick={this.props.decreaseAppState}>Decrease appState</button>
      </div>
      <input type='text' value={compOneState} onChange={this.handleChange}/>
      {compOneState}
      <CompFour appState={appState} compOneState={compOneState}/>
      <CompFour appState={appState} compOneState={compOneState}/>
    </div>;
  }
}

export default CompOne;
