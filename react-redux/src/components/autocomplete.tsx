import * as React from "react";
import { Option } from "../types";
import "./autocomplete.scss";

interface Props {
  // Determines if the dropdown input should be auto focused
  autoFocus: boolean;

  // Options to search through while the user is changing the input value
  options: Option[];

  // Function that is invoked with the selected option when the user selects an option
  onSelect: (option: Option) => void;
}

interface State {
  // Dropdown input value
  value: string;

  // Boolean that determines if the user has selected an option and not changed the input after selecting
  selected: boolean;
}

export default class Autocomplete extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: "", selected: false };
  }

  public render() {
    const { options, autoFocus } = this.props;
    const { value, selected } = this.state;

    const filteredOptions = options
      .filter((option) => option.label.toLowerCase().startsWith(value.toLowerCase()))
      .slice(0, 10);

    const hasOptionsAndInput = value.length > 0 && filteredOptions.length > 0;

    return (<div className="dropdown">
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={({ target }) => this.setState({ value: target.value, selected: false })}
        onKeyDown={({ key }) =>
          key === "Enter" && hasOptionsAndInput ? this.onSelect(filteredOptions[0]) : null
        }
      />
      { !selected && hasOptionsAndInput ? <ul>
        { filteredOptions.map(
          (option) => <li key={option.label}>
            <button onClick={() => this.onSelect(option)}>{ option.label }</button>
          </li>,
        )}
      </ul> : null }
    </div>);
  }

  private onSelect(option: Option) {
    if (!option) {
      return;
    }

    this.setState({ value: option.label, selected: true });
    this.props.onSelect(option);
  }
}
