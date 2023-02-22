import React from "react";
import "./styles.css";
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pi: 3.14,
      r: 2
    };
  }
  formula = () => {
    this.setState({ r: "3" });
  };
  render() {
    return (
      <>
        <h1> Area:{this.state.pi * this.state.r * this.state.r}</h1>
        <h1>{this.state.pi}</h1>
        <button onClick={this.formula}>change</button>
      </>
    );
  }
}
export default Task;
