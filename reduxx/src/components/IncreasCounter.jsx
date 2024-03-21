import { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions.jsx";
import { connect } from "react-redux";

class IncreasCounter extends Component {
  render() {
    return (
      <>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseCounter());
          }}
        >
          arttir
        </button>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreasCounter);
