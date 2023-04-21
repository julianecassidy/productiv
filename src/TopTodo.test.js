import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const  TEST_TODO_0 = {
  title: "test todo priority 2",
  description: "test desc",
  priority: 2,
  id: 0
};

const TEST_TODO_1 = {
  title: "test todo priority 1",
  description: "test desc",
  priority: 1,
  id: 1,
};

const TEST_TODO_2 = {
  title: "test todo priority 1 2nd version",
  description: "test desc",
  priority: 1,
  id: 2,
};

const TEST_TODO_3 = {
  title: "test todo priority 3",
  description: "test desc",
  priority: 3,
  id: 3,
};

const TEST_TODOS = [TEST_TODO_0, TEST_TODO_1, TEST_TODO_2, TEST_TODO_3];

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo toDos={TEST_TODOS}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(
      <TopTodo toDos={TEST_TODOS} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders the correct Todo", function () {
    const { container } = render(
      <TopTodo toDos={TEST_TODOS} />
    );

    expect(container).toContainHTML("test desc");
    expect(container).toContainHTML("Priority: 1");
    expect(container).toContainHTML("test todo priority 1");
  });

  it("If no priority 1, renders next lowest Todo", function () {
    const { container } = render(
      <TopTodo toDos={[TEST_TODO_3]} />
    );

    expect(container).toContainHTML("test desc");
    expect(container).toContainHTML("Priority: 3");
    expect(container).toContainHTML("test todo priority 3");  
  });

});