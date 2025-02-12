import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.date.toLocaleTimeString()}</h2>
        <h3></h3>
      </div>
    );
  }
}

export default Clock;
