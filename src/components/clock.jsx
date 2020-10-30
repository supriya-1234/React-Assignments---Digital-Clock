import React from "react";
class Clock {
  constructor(props) {
    super(props);
    this.state = {
      time:
        new Date.getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds()
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({
      time:
        new Date.getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds()
    });
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}
export default Clock;
