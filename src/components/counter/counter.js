import React from "react";
import "./counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = "";
    if (count > 0) {
      polarity = "positive";
    } else if (count < 0) {
      polarity = "negative";
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ["count", this.state.polarity].join(" ");
    return (
      <section className="counter centered">
        <a
          href="#"
          id="left"
          className="down clicker centered"
          onClick={this.handleDown}
        >
          -
        </a>
        <span className={classes}>{this.state.count}</span>
        <a
          href="#"
          id="right"
          className="up clicker centered"
          onClick={this.handleUp}
        >
          +
        </a>
      </section>
    );
  }
}

export default Counter;
