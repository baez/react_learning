import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


// === Component re-use ===
// Differentiating behavior of a component instance 
// based on a property
class Button extends Component {

  handleClick = () => {
    this.props.onClick(this.props.incrementBy);
  };

  render() { 
    return ( 
      <button onClick={this.handleClick}> 
        Add {this.props.incrementBy}
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

  increment = (incrementBy) => { 
    this.setState({ 
      count: this.state.count + incrementBy
    }); 
  }; 

  render() { 
    return ( 
      <div> 
        <Button onClick={this.increment} incrementBy={1} />
        <Button onClick={this.increment} incrementBy={10} />

        <Result count={this.state.count}/> 
      </div> 
    ); 
  } 
} 

render(<App />, document.getElementById('root'));
