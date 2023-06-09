import React, { useState } from "react";

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * State:
 *  - Object with
 *    - title: Inital Form Data
 *    - description: Inital Form Data
 *    - priority: Inital Form Data
 *    - id: Inital Form Data
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

function TodoForm({
  initialFormData = { title: "", description: "", priority: 1, id: "" },
  handleSave,
}) {
  const [formData, setFormData] = useState({
    title: initialFormData.title,
    description: initialFormData.description,
    priority: initialFormData.priority,
    id: initialFormData.id,
  });

  console.log("formData state", formData);

  /** Update form input. */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(initialFormData);
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority" className="d-inline-flex">
            Priority:&nbsp;&nbsp;
          </label>
          <select
            id="newTodo-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          Gø!
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
