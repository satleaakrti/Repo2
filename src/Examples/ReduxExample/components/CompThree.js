import React from 'react';

// class CompThree extends Component {

//   render() {
//     const { appState, compTwoState } = this.props;

//     return <div className='comp-three'>
//       <h3>CompThree</h3>
//       <p>Appstate is: {appState}</p>
//       <p>CompTwoState: {compTwoState}</p>
//     </div>;
//   }
// }

export default (props) => {
  const { appState, compTwoState } = props;
  return <div className='comp-three'>
      <h3>CompThree</h3>
      <p>Appstate is: {appState}</p>
      <p>CompTwoState: {compTwoState}</p>
    </div>;
};
