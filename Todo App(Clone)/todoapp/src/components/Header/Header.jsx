import React from "react";
import FormTodo from "./FormTodo";

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <FormTodo />
    </header>
  );
}

export default Header;
