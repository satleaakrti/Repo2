import React, { Component } from 'react';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';
import Layout from './Component/Layout/Layout';

class TestRun extends Component {
  render () {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}
  
  export default TestRun;