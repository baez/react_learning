import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// === Result Component ===
// We want to send it a value and let it display
const Result = (props) => (
    <div style={{fontWeight: 'bold', fontSize: 18}}>
      Count: { props.count }
    </div>
);

class App extends Component {
    // We will send the value to Result from the parent 
  state = { count: 0 };

  render() { 
    return ( 
      <Result count={this.state.count} /> 
    ); 
  } 
  
}

render(<App />, document.getElementById('root'));
