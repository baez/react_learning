import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  // Simple button but we want to do more with it soon.
  render() { 
    return ( 
      <button>Submit</button> 
    ); 
  } 
}

render(<App />, document.getElementById('root'));
