import React from "react";
import TaskAccordion from "../components/TaskAccordion";

const ListTodos = ({ allTasks, deleteTodo, toggleCompleted }) => {
  return (
    <div className=" my-8 border border-gray-600 w-3/4 mx-auto p-4 rounded-md bg-fuchsia-200">
      <h1 className="font-bold text-2xl text-blue-800">Tasks List</h1>

      <div className="mt-4">
        {allTasks.length !== 0 ? (
          <>
            {allTasks.map((singleTask) => (
              <TaskAccordion
                key={singleTask.id}
                singleTask={singleTask}
                deleteTodo={deleteTodo}
                toggleCompleted={toggleCompleted}
              />
            ))}
          </>
        ) : (
          <>
            <p className="text-center text-4xl py-8">Task List is Empty</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ListTodos;
