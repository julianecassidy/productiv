import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const TEST_TODO = {
  title: "test todo",
  description: "test desc",
  priority: 1,
  id: 1,
};

function testUpdate() {
  console.log("Called test update!");
}

function testRemove() {
  console.log("Called test remove!");
}

testRemove = jest.fn();
testUpdate = jest.fn();

// function testHandleDelete() {
//   testRemove();
// }

describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    const { container } = render(
      <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
    );
    render(
      <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
    );
  });

  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Shows the todo on first render", function () {
    const { container } = render(
      <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
    );
    // Expect Edit button to be in the container, and todoForm to not be in the container.
    expect(container.querySelector(".EditableTodo-toggle")).toBeInTheDocument();
    expect(
      container.querySelector(".Editable-TodoForm")
    ).not.toBeInTheDocument();
  });

  it("Shows the form when the edit button is clicked", function () {
    const { container } = render(
      <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
    );

    // Expect Editable Todo button to be in the container before click.
    const EditableToDoToggle = container.querySelector(".EditableTodo-toggle");
    expect(EditableToDoToggle).toBeInTheDocument();
    // Click on Edit Button for a ToDo.
    fireEvent.click(EditableToDoToggle);
    // Expect Editable Todo button to not be in the container after click. Shows Todo form.
    expect(EditableToDoToggle).not.toBeInTheDocument();
    expect(container.querySelector(".Editable-TodoForm")).toBeInTheDocument();
  });

  it("Calls the remove function when the delete button is clicked", function () {
    const { container } = render(
      <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
    );

    const deleteButton = container.querySelector(".EditableTodo-delBtn");
    // Click the delete button.
    fireEvent.click(deleteButton);
    // expect that testRemove has been called.
    expect(testRemove).toHaveBeenCalled();
  });

  it("Shows the correct Todo on the page", function () {
    const { container } = render(
      <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
    );

    expect(container).toContainHTML("test desc");
    expect(container).toContainHTML("Priority: 1");
    expect(container).toContainHTML("test todo");
  });

  // it("Calls the handleSave function when the save button is clicked", function () {
  //   const { container } = render(
  //     <EditableTodo toDo={TEST_TODO} update={testUpdate} remove={testRemove} />
  //   );

  //   // Expect Editable Todo button to be in the container before click.
  //   const EditableToDoToggle = container.querySelector(".EditableTodo-toggle");
  //   expect(EditableToDoToggle).toBeInTheDocument();
  //   // Click on Edit Button for a ToDo.
  //   fireEvent.click(EditableToDoToggle);
  //   // Expect Editable Todo button to not be in the container after click. Shows Todo form.
  //   expect(EditableToDoToggle).not.toBeInTheDocument();
  //   expect(container.querySelector(".Editable-TodoForm")).toBeInTheDocument();
  // });
});

// {
//   /* <button
//               className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
//               onClick={handleDelete}
//             >
//               Del
//             </button> */
// }
