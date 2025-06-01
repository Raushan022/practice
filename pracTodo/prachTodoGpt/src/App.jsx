import { useState } from "react";
import "./App.css";
import FormTodo from "./components/FormTodo";
import ListTodos from "./components/listTodos";

function App() {
  const [allTasks, setAllTasks] = useState([]);

  const tasksHandler = (newTask) => {
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
  };
  console.log(allTasks);

  return (
    <>
      <div className="mx-16">
        <h1 className="underline text-2xl font-bold py-4 text-center">
          Your Todo App
        </h1>
      </div>
      <FormTodo tasksHandler={tasksHandler} />
      <ListTodos allTasks={allTasks} />
    </>
  );
}

export default App;
