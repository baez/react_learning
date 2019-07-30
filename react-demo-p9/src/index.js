import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// === Component re-use ===
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
    <div style={{fontWeight: 'bold', fontSize: 18}}>
      Count: { props.count } 
    </div>
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
        <Button onClick={this.increment}/>
        <Result count={this.state.count}/> 
      </div> 
    ); 
  } 
} 

// Next we will add a little more capability to the button
// We want each button to act a bit differently
// Like incrementing by a different value

render(<App />, document.getElementById('root'));
