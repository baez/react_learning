import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
          <p>Hello world!</p>
          <p>This is a simple React component.</p>
      </div>
    );
  }
  
}

render(<App />, document.getElementById('root'));
