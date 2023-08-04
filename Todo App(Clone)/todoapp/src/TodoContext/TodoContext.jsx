import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [todos, setTodos] = useState([]);

  const values = {
    todos,
    setTodos,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider companent");
  }
  return context;
};
