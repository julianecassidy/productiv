import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });

});