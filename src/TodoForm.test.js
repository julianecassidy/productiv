import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

function testHandleSave() {
  console.log("Called testHandleSave");
}

const testInitialFormData = {
  title: "testTitle",
  description: "test desc",
  priority: 2,
  id: 1,
};

testHandleSave = jest.fn();

describe("TodoForm component", function () {
  it("renders without crashing", function () {
    render(
      <TodoForm
        initialFormData={testInitialFormData}
        handleSave={testHandleSave}
      />
    );
  });

  it("matches snapshot", function () {
    const { container } = render(
      <TodoForm
        initialFormData={testInitialFormData}
        handleSave={testHandleSave}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Updates an existing todo", function () {
    const { container } = render(
      <TodoForm
        initialFormData={testInitialFormData}
        handleSave={testHandleSave}
      />
    );
    const priorityInput = container.querySelector("#newTodo-priority");
    const titleInput = container.querySelector("#newTodo-title");
    const submitBtn = container.querySelector(".NewTodoForm-addBtn");
    // fill out the form
    fireEvent.change(priorityInput, { target: { value: "1" } });
    fireEvent.change(titleInput, { target: { value: "new title" } });
    fireEvent.click(submitBtn);
    // item submitted!
    expect(testHandleSave).toHaveBeenCalled();
  });

  it("Creates a new todo", function () {
    const { container } = render(<TodoForm handleSave={testHandleSave} />);
    const priorityInput = container.querySelector("#newTodo-priority");
    const titleInput = container.querySelector("#newTodo-title");
    const descriptionInput = container.querySelector("#newTodo-description");
    const submitBtn = container.querySelector(".NewTodoForm-addBtn");

    // fill out the form
    fireEvent.change(priorityInput, { target: { value: "2" } });
    fireEvent.change(titleInput, { target: { value: "new title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "new description" },
    });
    fireEvent.click(submitBtn);
    // item submitted!
    expect(testHandleSave).toHaveBeenCalled();
  });
});

// newTodo-priority
// {
//   /* <label htmlFor="newTodo-priority" className="d-inline-flex">
//             Priority:&nbsp;&nbsp;
//           </label> */
// }

// it("can add a new item", function () {
//   const { getByLabelText, queryByText } = render(<ShoppingList />);

//   // no items yet
//   expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

//   const nameInput = getByLabelText("Name:");
//   const qtyInput = getByLabelText("Qty:");
//   const submitBtn = queryByText("Add a new item!");

//   // fill out the form
//   fireEvent.change(nameInput, { target: { value: "ice cream" } });
//   fireEvent.change(qtyInput, { target: { value: 100 } });
//   fireEvent.click(submitBtn);

//   // item exists!
//   expect(queryByText("ice cream: 100")).toBeInTheDocument();
// });
