import React from 'react';

// class CompOne extends Component {

//   render() {
//     const { appState, compOneState } = this.props;

//     return <div  className='comp-four'>
//       <h3>CompFour</h3>
//       <p>Appstate is: {appState}</p>
//       <p>CompOneState: {compOneState}</p>
//     </div>;
//   }
// }

export default ({ appState, compOneState }) => <div  className='comp-four'>
      <h3>CompFour</h3>
      <p>Appstate is: {appState}</p>
      <p>CompOneState: {compOneState}</p>
    </div>;
