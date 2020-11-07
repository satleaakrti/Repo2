import React, {Component} from 'react';

class TestRun extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
     
    }
  
    handleChange = (event) => {   
       this.setState({value: event.target.value}); 
       }

    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          <div>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} /></div></label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }
  export default TestRun;