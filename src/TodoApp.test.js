import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<TodoApp />);
  });
});

// it("Shows no todos if there are no todos and tells us there are no todos.", function () {
//   const { container } = render(
//     <EditableTodoList toDos={[]} update={testUpdate} remove={testRemove} />
//   );
// });
