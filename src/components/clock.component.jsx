import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        name: props.name,
        timezone: props.timezone
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>City: {this.state.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString('pl-PL', {timeZone:this.state.timezone})}.</h2>
      </div>
    );
  }
}

export default Clock;
