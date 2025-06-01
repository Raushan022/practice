import React, { useRef, useState } from "react";

const TaskAccordion = ({ singleTask }) => {
  const { id, task, taskDescription } = singleTask;

  const contentRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-600 p-4 rounded-md mb-4 bg-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white cursor-pointer"
      >
        <div className="justify-between flex px-3">
          <div>{task}</div>
          <div>{isOpen ? "⬆️" : "⬇️"}</div>
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
      </div>
    </div>
  );
};

export default TaskAccordion;
