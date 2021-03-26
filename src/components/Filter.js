import React, { Component } from "react";

import { OPTIONS } from "../utils/Constants";
import Select from "react-select";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  changeUpdate = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      this.props.handleChange(this.state.selectedOption.value)
    );
  };

  render() {
    let options = [];

    OPTIONS.map((option, index) => {
      options.push({
        value: option,
        label: option,
      });
    });

    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.changeUpdate}
        options={options}
      />
    );
  }
}

export default Filter;
