import { Component } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = (event) => {
    let Name = event.target.name;
    let value = event.target.value;

    this.setState({ [Name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(
      this.state.email +
        " " +
        this.state.password +
        " " +
        this.state.city +
        " " +
        this.state.description,
    );
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h3>Form Demo 2</h3>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="Enter city"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color={"success"}>Save</Button>
        </Form>
      </>
    );
  }
}

export default FormDemo2;
