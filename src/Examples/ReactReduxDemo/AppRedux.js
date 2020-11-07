import React, {Component } from 'react';
import BookContainer from './components/bookContainer';
import store from './redux/store';
import {Provider} from 'react-redux';

class TestRun extends Component{

    render(){
        return (
          <Provider store= {store}>
            <div className="TestRun">
          <BookContainer />
          </div>
          </Provider>
        )
      } 
}

export default TestRun;