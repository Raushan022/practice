import React from "react";

const ListTodos = ({ allTasks }) => {
  return (
    <div className=" my-8 border border-gray-600 w-3/4 mx-auto p-4 rounded-md">
      <h1 className="font-bold text-2xl text-blue-800">Tasks List</h1>

      <div className="mt-4">
        {allTasks.length !== 0 && (
          <>
            {allTasks.map((singleTask) => (
              <div>
                <p className="text-2xl">{singleTask.task}</p>
                <p>{singleTask.taskDescription}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListTodos;
