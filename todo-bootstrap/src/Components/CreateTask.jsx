import React from "react";
import { useState } from "react";

function CreateTask(probs) {
  const [task, setTask] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  const submitForm = (e) => {
    probs.onAdd(task);
    setTask({ title: "", content: "" });
    e.preventDefault();
  };

  return (
    <div className="task__create">
      <form className="form__task">
        <input
          className="form-control form__input mb-3"
          name="title"
          placeholder="Başlık"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          className="form-control form__textarea mt-2"
          name="content"
          cols="30"
          rows="3"
          onChange={handleChange}
          value={task.content}
          placeholder="Yapılacak İş"></textarea>
        <button onClick={submitForm} className="btn btn-primary form__button">
          Ekle
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
