import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const TODO = {title: "test", description: "test desc", priority: 1, id: 1}
// TODO: add a blank function and pass this in as a prop, then test if it is called

describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo toDo={TODO}  />);
    expect(container).toMatchSnapshot();
  });

});