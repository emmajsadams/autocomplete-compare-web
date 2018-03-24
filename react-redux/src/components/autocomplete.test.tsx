import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import * as test from "tape";
import { Option } from "../types";

import Autocomplete from "./autocomplete";

/* tslint:disable max-line-length */
test("components/Autocomplete", (t) => {
  const sevenOfNine = { label: "Seven of Nine", value: 7 };
  const options: Option[] = [
    sevenOfNine,
    { label: "Picard", value: 6 },
    { label: "Seven of Ten", value: 8 },
  ];
  const onSelect = (option: Option) => { return; };

  t.test("should set autoFocus based on property", (assert) => {
    const autoFocus = true;
    const wrapper = shallow(<Autocomplete autoFocus={autoFocus} options={options} onSelect={onSelect} />);

    assert.equals(wrapper.find("input").props().autoFocus, autoFocus, "input autoFocus property is equal to the Autocomplete.autoFocus property");
    assert.end();
  });

  t.test("should not select an option when enter is pressed without any user input", (assert) => {
    const onSelectSpy = sinon.spy();
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelectSpy} />);

    wrapper.find("input").simulate("keyDown", { key: "Enter" });

    assert.equals(wrapper.find("input").props().value, "", "input value is empty string");
    assert.false(onSelectSpy.called, "onSelect was not invoked");
    assert.end();
  });

  t.test("should not select an option when enter is pressed after user input has been changed and deleted", (assert) => {
    const onSelectSpy = sinon.spy();
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelectSpy} />);

    wrapper.find("input").simulate("change", {target: {value: "SeVeN oF" }});
    wrapper.find("input").simulate("change", {target: {value: "" }});
    wrapper.find("input").simulate("keyDown", { key: "Enter" });

    assert.equals(wrapper.find("input").props().value, "", "input value is empty string");
    assert.false(onSelectSpy.called, "onSelect was not invoked");
    assert.end();
  });

  t.test("should not show the options list when no user input change has ocurred", (assert) => {
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelect} />);

    assert.false(wrapper.find("ul").exists(), "options list does not exist");
    assert.end();
  });

  t.test("should not show the options list when user input matches options and then is deleted", (assert) => {
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelect} />);

    wrapper.find("input").simulate("change", { target: { value: "S" }});
    wrapper.find("input").simulate("change", { target: { value: "" }});

    assert.false(wrapper.find("ul").exists(), "options list does not exist");
    assert.end();
  });

  t.test("should not show the options list when user input does not match any option labels", (assert) => {
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelect} />);

    wrapper.find("input").simulate("change", {target: {value: "DaTa" }});

    assert.false(wrapper.find("ul").exists(), "options list does not exist");
    assert.end();
  });

  t.test("should show the options list with one option when user input matches a single option", (assert) => {
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelect} />);

    wrapper.find("input").simulate("change", {target: {value: "PiCaRd" }});

    assert.true(wrapper.find("ul").exists(), "options list exists");
    const dropdownItem = wrapper.find("li");
    assert.equals(dropdownItem.length, 1, "options list is length 1");
    assert.equals(dropdownItem.text(), "Picard", "first option is Picard");
    assert.end();
  });

  t.test("should show the options list with several options when user input matches several options", (assert) => {
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelect} />);

    wrapper.find("input").simulate("change", {target: {value: "SeVeN oF" }});

    assert.true(wrapper.find("ul").exists(), "options list exists");
    const optionElements = wrapper.find("li");
    assert.equals(optionElements.length, 2, "options list is length 2");
    assert.equals(optionElements.at(0).text(), "Seven of Nine", "first option is Seven of Nine");
    assert.equals(optionElements.at(1).text(), "Seven of Ten", "second option is Seven of Ten");
    assert.end();
  });

  t.test("should not show the options list and show the first matched option as input value when user input matches multiple options and enter is pressed", (assert) => {
    const onSelectSpy = sinon.spy();
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelectSpy} />);

    wrapper.find("input").simulate("change", {target: {value: "SeVeN oF" }});
    wrapper.find("input").simulate("keyDown", { key: "Enter" });

    assert.false(wrapper.find("ul").exists(), "options list does not exist");
    assert.equals(wrapper.find("input").props().value, "Seven of Nine", "input value is selected option");
    assert.true(onSelectSpy.calledWithExactly(options[0]), "onSelect was invoked with selected option");
    assert.true(onSelectSpy.calledOnce, "onSelect was calledOnce");
    assert.end();
  });

  t.test("should not show the options list and show the clicked option as input value when user input matches multiple options and clicks an option", (assert) => {
    const onSelectSpy = sinon.spy();
    const wrapper = shallow(<Autocomplete autoFocus={true} options={options} onSelect={onSelectSpy} />);

    wrapper.find("input").simulate("change", {target: {value: "SeVeN oF" }});
    wrapper.find("button").at(1).simulate("click");

    assert.false(wrapper.find("ul").exists(), "options list does not exist");
    assert.equals(wrapper.find("input").props().value, "Seven of Ten", "input value is clicked option");
    assert.true(onSelectSpy.calledWithExactly(options[2]), "onSelect was invoked with selected option");
    assert.true(onSelectSpy.calledOnce, "onSelect was calledOnce");
    assert.end();
  });

  t.test("should limit the amount of options when the number of options exceeds 10", (assert) => {
    const overLimitOptions: Option[] = [];
    for (let i = 0; i < 11; i++) {
      overLimitOptions.push(sevenOfNine);
    }
    const wrapper = shallow(<Autocomplete autoFocus={true} options={overLimitOptions} onSelect={onSelect} />);
    const input = wrapper.find("input");

    wrapper.find("input").simulate("change", {target: {value: "SeVeN oF" }});

    assert.true(wrapper.find("ul").exists(), "options list exists");
    assert.equals(wrapper.find("li").length, 10, "options list is length 10");
    assert.end();
  });
});
