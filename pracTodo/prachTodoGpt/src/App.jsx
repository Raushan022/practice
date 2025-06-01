import { useState } from "react";
import "./App.css";
import FormTodo from "./components/FormTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [allTasks, setAllTasks] = useState([]);

  const tasksHandler = (newTask) => {
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
  };
  console.log(allTasks);

  const deleteTodo = (id) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setAllTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="mx-16">
        <h1 className="underline text-2xl font-bold py-4 text-center">
          Your Todo App
        </h1>
      </div>
      <FormTodo tasksHandler={tasksHandler} />
      <ListTodos
        allTasks={allTasks}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </>
  );
}

export default App;
