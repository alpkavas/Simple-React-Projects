import { useField } from "formik";
import React from "react";

function CustomInput({ label, ...probs }) {
  const [field, meta] = useField(probs);

  return (
    <>
      <label>{label}</label>
      <input {...field} {...probs} className={meta.error ? "inputError" : ""} />
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomInput;
