// App.js
import React, { Component }from 'react';
import ComponentePai from './components/component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

export default App;