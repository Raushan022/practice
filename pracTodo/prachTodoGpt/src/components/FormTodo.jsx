import React, { useState } from "react";

const FormTodo = ({ tasksHandler }) => {
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!task.trim() || !taskDescription) return;

    const newTask = {
      id: Date.now(),
      task: task,
      taskDescription: taskDescription,
      completed: false,
    };

    tasksHandler(newTask);

    setTask("");
    setTaskDescription("");
  };

  return (
    <div className="mx-16">
      <form
        onSubmit={formSubmitHandler}
        className="border border-gray-600 w-1/2 mx-auto p-4 rounded-md"
      >
        <div className="p-3 ">
          <span className="text-blue-800">Task: </span>
          <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="px-2"
          />
        </div>
        <div className="p-3">
          <span className="text-blue-800">Task Description: </span>
          <input
            type="text"
            placeholder="Enter Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="px-2"
          />
        </div>

        <div className="p-3">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-1 mb-6 rounded-md hover:bg-green-700 hover:cursor-pointer "
          >
            Add+
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
