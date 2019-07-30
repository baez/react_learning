import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  // the first piece of data we want in state is a label
  // we want this data to be changed inside this 
  // component.
  state = { label: " Do something dynamic like +1 " }; 

  render() { 
    return ( 
      <button> 
        {this.state.label} 
      </button> 
    ); 
  } 
}

render(<App />, document.getElementById('root'));
