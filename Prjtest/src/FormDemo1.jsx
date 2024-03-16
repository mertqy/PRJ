import { Component } from "react";

class FormDemo1 extends Component {
  state = { userName: "", City: "" };
  onChangeHandler = (event) => {
    // this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName + " " + this.state.City);
  };
  render() {
    return (
      <>
        <form className={"mt-5"} onSubmit={this.onSubmitHandler}>
          <h3>Name is {this.state.userName}</h3>
          <input
            name="userName"
            onChange={this.onChangeHandler}
            type="text"
          ></input>

          <h3>City is {this.state.City}</h3>
          <input
            name="City"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <hr />
          <input type="submit" value={"Save"} />
        </form>
      </>
    );
  }
}

export default FormDemo1;
