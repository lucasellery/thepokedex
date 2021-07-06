import React from "react";
import { render } from "@testing-library/react-native";

import StatsRow from "../../src/pages/details/UI/StatsRow";

describe("Pkm Stats Tests", () => {
  it("should render a stats row correctly", () => {
    const { queryByTestId } = render(<StatsRow />);
    const component = queryByTestId("stats-row");

    expect(component).toBeTruthy();
  });

  it("should render received their props correctly", () => {
    const label = "HP";
    const value = 50;

    const { queryByTestId } = render(<StatsRow label={label} value={value} />);
    const labelComp = queryByTestId('stats-label')
    const valueComp = queryByTestId('stats-value')

    expect(labelComp.props.children).toBe(label)
    expect(valueComp.props.children).toBe(value)
  });
});
