import React, { Component } from 'react';

import Person from './Persons/Person';

class Persons extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log(' shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(' getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(' componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log(' rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
