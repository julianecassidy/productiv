import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - toDos
 *
 * TodoApp -> TopTodo -> Todo
 */

function TopTodo({ toDos }) {
  // lowest-priority # is the highest priority
  let top = toDos.reduce(
    (acc, cur) => (cur.priority < acc.priority ? cur : acc),
    toDos[0]
  );
  console.log(top, "TOP TODO");

  return (
    <Todo
      id={top.id}
      title={top.title}
      description={top.description}
      priority={top.priority}
    />
  );
}

export default TopTodo;
