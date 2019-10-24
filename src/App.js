import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
  render() {
    return (
      <div style={{margin: 20}}>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;