import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {

  style() {
    return {
      color: 'red',
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center'
    };
  };

  render() {
    return (
      <div style={this.style()}>
          Hello world from React!
      </div>
    );
  }
  
}

render(<App />, document.getElementById('root'));
