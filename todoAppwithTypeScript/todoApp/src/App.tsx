import { ChangeEvent, FC, useState } from "react";
import { todoType } from "./appType"; // typeları belirtmek için import ettik
import TodoItem from "./companents/TodoItem";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);
  const [todo, setTodo] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDay(Number(event.target.value));
    }
  };

  const newTask = (): void => {
    const newTask = { task, day }; // tek de yazdım aslı => task:task day: day
    setTodo([...todo, newTask]);
    setTask("");
    setDay(0);
  };

  const deleteTask = (toDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.task !== toDelete;
      })
    );
  };

  return (
    <>
      <div className="addTask">
        <label htmlFor="text">task:</label>
        <input
          type="text"
          value={task}
          name="task"
          placeholder="enter your task"
          onChange={handleChange}
        />
        <label htmlFor="day">day:</label>
        <input type="number" value={day} name="day" onChange={handleChange} />
        <button onClick={newTask}>New Task</button>
      </div>

      <div className="todoArea">
        {todo.map((item: todoType, index: number) => {
          return <TodoItem key={index} task={item} deleteTask={deleteTask} />;
        })}
      </div>
    </>
  );
};

export default App;
