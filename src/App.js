import React, { Component } from 'react';
import './App.css';
import Clock from './components/clock.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock name="Shanghai" timezone="Asia/Shanghai"/>
        <Clock name="New York" timezone="America/New_York"/>
        <Clock name="Warsaw" timezone="Europe/Warsaw"/>
      </div>
    );
  }
}

export default App;
