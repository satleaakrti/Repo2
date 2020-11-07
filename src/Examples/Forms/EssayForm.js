import React, {Component} from 'react';

class TestRun extends Component {
    constructor(props) {
      super(props);
      this.state = {  value: 'Please write an essay about your favorite DOM element.' };
    
    }
  
    handleChange = (event) => {   
       this.setState({value: event.target.value}); 
      }

    handleSubmit =(event) => {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default TestRun;