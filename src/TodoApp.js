import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - toDos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [toDos, setToDos] = useState(initialTodos);

  console.log("toDos state", toDos);

  /** add a new todo to list */
  function create(newTodo) {
    const addedTodo = { ...newTodo, id: uuid() };
    setToDos((toDos) => [...toDos, addedTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const origTodoId = toDos.indexOf(
      toDos.find((todo) => todo.id === updatedTodo.id)
    );
    toDos.splice(origTodoId, 1, updatedTodo);
    setToDos([...toDos]);
  }

  /** delete a todo by id */
  function remove(id) {
    setToDos(toDos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {toDos.length > 0 ? (
            <EditableTodoList toDos={toDos} update={update} remove={remove} />
          ) : (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        <div className="col-md-6">
          {toDos.length > 0 && (
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo toDos={toDos} />
            </section>
          )}
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
