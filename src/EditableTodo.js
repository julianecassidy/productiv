import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - toDo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State
 *  - beingEdited: Boolean
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ toDo, update, remove }) {
  const [beingEdited, setBeingEdited] = useState(false);
  console.log("editedableTodo, beingEditedState: ", beingEdited);

  const toDoUpdateData = {
    title: toDo.title,
    description: toDo.description,
    priority: toDo.priority,
    id: toDo.id,
  };
  // TODO: REWRITE docstring to what it's actually doing.
  /** Toggle if this is being edited */
  function toggleEdit() {
    setBeingEdited(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(toDo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    setBeingEdited(false);
  }

  return (
    <div className="EditableTodo">
      {beingEdited ? (
        <TodoForm initialFormData={toDoUpdateData} handleSave={handleSave} />
      ) : (
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
          <Todo
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            description={toDo.description}
            priority={toDo.priority}
          />
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
