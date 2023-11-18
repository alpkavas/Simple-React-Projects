import { useState } from "react";
import "./App.css";
import CreateTask from "./Components/CreateTask";
import Header from "./Components/Header";
import Task from "./Components/Task";
import Footer from "./Components/Footer";

function App() {
  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((tasks, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="row my-2">
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              id={index}
              title={task.title}
              content={task.content}
              onDelete={deleteTask}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
