import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const TEST_TODO = {
  title: "test todo",
  description: "test desc",
  priority: 1,
  id: 1,
};

describe("Todo component", function () {
  it("renders without crashing", function () {
    render(<Todo
      id={TEST_TODO.id} 
      title={TEST_TODO.title} 
      description={TEST_TODO.description} 
      priority={TEST_TODO.priority} />);
  });

  it("matches snapshot", function () {
    const { container } = render(
      <Todo 
        id={TEST_TODO.id} 
        title={TEST_TODO.title} 
        description={TEST_TODO.description} 
        priority={TEST_TODO.priority} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Shows the correct Todo on the page", function () {
    const { container } = render(<Todo
        id={TEST_TODO.id} 
        title={TEST_TODO.title} 
        description={TEST_TODO.description} 
        priority={TEST_TODO.priority} />)

    expect(container).toContainHTML("test desc");
    expect(container).toContainHTML("Priority: 1");
    expect(container).toContainHTML("test todo");
  });

});