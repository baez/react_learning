import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  
  // lets say we want to increment the button label
  // every time we click the button.
  state = { label: 0 }; 
 
  handleClick = () => { 
    // update state with the label value + 1 
    this.setState({ 
      label: this.state.label + 1 
    }); 
  }; 

  render() { 
    return ( 
      <button onClick={this.handleClick}> 
        Click to Add 1 => Result: {this.state.label} 
      </button> 
    ); 
  } 
}
  // This design can get messy very quickly
  // We really need to divide things into separate components
  // Responsibilities will be separated
  // On the first cut we separate the Button from the Result
  
render(<App />, document.getElementById('root'));
