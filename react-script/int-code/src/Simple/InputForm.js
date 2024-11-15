// 
import React, { Component } from 'react';

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Name:", this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
