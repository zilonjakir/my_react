import React, { Component } from 'react';

import './App.css';
import Title from './Title/Title'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="display-3">Twinkle Cats</h1>
          <Title name="Jakir Hosan" email="jakirhosan@gmail.com"/>
          <Title name="Zilon" email="zilon@gmail.com"/>
        </div>
      </div>
    );
  }
}

export default App;
