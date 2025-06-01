import React, { useRef, useState } from "react";

const TaskAccordion = ({ singleTask, deleteTodo, toggleCompleted }) => {
  const { id, task, taskDescription, completed } = singleTask;

  const contentRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  //another way we can handle toggle and delete by passing these in function
  //as we passed earlier to add task but this time not necessary as we need to
  //pass id only so we can directly pass id also

  // const handleCompleteToggle = (toggleId) => {
  //   toggleCompleted(toggleId);
  // };

  // const deleteTask = (taskId) => {
  //   deleteTodo(taskId);
  // };

  return (
    <div className="border border-gray-600 p-4 rounded-md mb-4 bg-white">
      <div className="bg-white cursor-pointer">
        <div className="justify-between items-center flex px-3">
          <span className={completed ? "line-through text-gray-500" : ""}>
            {task}
          </span>
          <div className="flex">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleCompleted(id)}
              className="mr-8"
            />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "⬆️" : "⬇️"}
            </button>
          </div>
        </div>
      </div>

      {/* commented this way as this has no animation  */}
      {/* {isOpen && (
        <div className=" mt-6 px-3">
          <p>{taskDescription}</p>
        </div>
      )} */}

      {/* Animated content container */}
      <div
        ref={contentRef}
        className={`transition-all duration-300 overflow-hidden px-3 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p>{taskDescription}</p>
        <button
          className="mt-4 bg-red-600 text-white px-3 py-1 rounded-md"
          onClick={() => deleteTodo(id)}
        >
          Delete 🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskAccordion;
