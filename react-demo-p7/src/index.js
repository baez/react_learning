import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// === Button ===
// We want to click this to trigger incrementing count
class Button extends Component {
  
  render() { 
    return ( 
      <button onClick={this.props.onClick}> 
        Increment Count
      </button> 
    ); 
  } 
}

  // Note that we are making a concious decision as to
  // where we will keep the state  
  // => inside the parent component
class App extends React.Component { 
  state = { count: 0 }; 

  increment = () => { 
    this.setState({ 
      count: this.state.count + 1 
    }); 
  }; 

  render() { 
    return ( 
      <div> 
        <Button onClick={this.increment}/> 
        {this.state.count}
      </div> 
    ); 
  } 
} 

render(<App />, document.getElementById('root'));
