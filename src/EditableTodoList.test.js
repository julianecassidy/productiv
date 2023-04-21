import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

const TEST_TODO_0 = {
  title: "test todo priority 2",
  description: "test desc",
  priority: 2,
  id: "testId",
};

const TEST_TODO_1 = {
  title: "test todo priority 1",
  description: "test desc",
  priority: 1,
  id: "testId",
};

const TEST_TODO_2 = {
  title: "test todo priority 1 2nd version",
  description: "test desc",
  priority: 1,
  id: "testId",
};

const TEST_TODO_3 = {
  title: "test todo priority 3",
  description: "test desc",
  priority: 3,
  id: "testId",
};

function testUpdate() {
  console.log("Called test update!");
}

function testRemove() {
  console.log("Called test remove!");
}

testRemove = jest.fn();
testUpdate = jest.fn();

// toDos, update, remove

const TEST_TODOS = [TEST_TODO_0, TEST_TODO_1, TEST_TODO_2, TEST_TODO_3];

describe("EditableTodoList component", function () {
  it("renders without crashing", function () {
    render(
      <EditableTodoList
        toDos={TEST_TODOS}
        update={testUpdate}
        remove={testRemove}
      />
    );
  });
  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodoList
        toDos={TEST_TODOS}
        update={testUpdate}
        remove={testRemove}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders every editable Todo on the page", function () {
    const { container } = render(
      <EditableTodoList
        toDos={TEST_TODOS}
        update={testUpdate}
        remove={testRemove}
      />
    );

    const testIds = container.querySelectorAll("#testId");
    expect(testIds.length).toEqual(4);
  });
});
