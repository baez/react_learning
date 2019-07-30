import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// === Putting the components together ===
class Button extends Component {
  
  render() { 
    return ( 
      <button onClick={this.props.onClick}> 
        Increment Count
      </button> 
    ); 
  } 
}

const Result = (props) => (
    <div>Count: { props.count } </div>
);

class App extends Component {
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
        <Result count={this.state.count}/> 
      </div> 
    ); 
  } 
} 

render(<App />, document.getElementById('root'));
