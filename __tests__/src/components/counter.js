import React from "react";
// import "../../../setupTests.js";

import renderer from "react-test-renderer";
import Counter from "../../../src/components/counter/counter";

describe("<Counter />", () => {
  it("is alive", () => {
    expect(true).toBeTruthy;
  });

  it("changes state on a click", () => {
    let component = mount(<Counter />);
    let link = component.find("#right");
    link.simulate("click");
    expect(component.state("count")).toBe(1);
    expect(component.find("span").text()).toContain("1");
  });

  it("decrements number", () => {
    let component = mount(<Counter />);
    let link = component.find("#left");
    link.simulate("click");
    expect(component.state("count")).toBe(-1);
    expect(component.find("span").text()).toContain("1");
  });
});
