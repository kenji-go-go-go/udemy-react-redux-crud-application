import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  hondlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  hondleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.hondlePlusButton}>+1</button>
        <button onClick={this.hondleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
