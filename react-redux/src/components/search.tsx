import * as React from "react";
import Autocomplete from "../components/autocomplete";
import { mockData } from "../mockData";
import { Option } from "../types";
import "./search.scss";
const logo = require("../logo.png");

interface State {
  // Option selected by the user from the autocomplete. If null no option has been selected.
  selectedOption?: Option;
}

export default class Search extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    const { selectedOption } = this.state;

    return <div className="search">
      <img className="logo" src={logo}/>
      <Autocomplete
        autoFocus={true}
        options={mockData}
        onSelect={(option) => this.setState({ selectedOption: option })}
      />
      { selectedOption ? <p>{selectedOption.label} - {selectedOption.value}</p> : <p/> }
    </div>;
  }
}
