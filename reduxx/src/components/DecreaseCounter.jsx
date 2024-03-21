import { Component } from "react";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions.jsx";
import { connect } from "react-redux";

class DecreaseCounter extends Component {
  render() {
    return (
      <>
        <button
          onClick={(e) => {
            this.props.dispatch(decreaseCounter());
          }}
        >
          azalt
        </button>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);
