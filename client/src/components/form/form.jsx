import { Component } from "react";

class Form extends Component {
  state = {
    data: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    this.onSubmit();
  };

  overrideHandleSubmit = e => {
    e.preventDefault();
    this.overrideOnSubmit();
  };

  handleOnChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  render() {
    return null;
  }
}

export default Form;
