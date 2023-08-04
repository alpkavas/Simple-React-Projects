import React from "react";
import { Formik, Field, Form } from "formik";
import { v4 as uuidv4 } from "uuid";
import validations from "./validations";
import { useTodo } from "../../../TodoContext/TodoContext";

function FormTodo() {
  const { setTodos } = useTodo();

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={validations}
      onSubmit={(values, bag) => {
        setTodos(prev => [
          ...prev,
          { id: uuidv4(), text: values.text, completed: false },
        ]);

        bag.resetForm();
      }}>
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          id="text"
          name="text"
          autoFocus
        />
      </Form>
    </Formik>
  );
}

export default FormTodo;
