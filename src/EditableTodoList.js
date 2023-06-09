import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - toDos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ toDos, update, remove }) {
  return (
    <div className="toDos">
      {toDos.map((toDo) => (
        <EditableTodo
          key={toDo.id}
          toDo={toDo}
          update={update}
          remove={remove}
        />
      ))}
    </div>
  );
}

export default EditableTodoList;
