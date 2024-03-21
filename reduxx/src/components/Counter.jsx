import { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <>
        <h3>{this.props.counter}</h3>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
