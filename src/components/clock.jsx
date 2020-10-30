import React from "react";
class Clock {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
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
      date: new Date()
    });
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
export default Clock;
