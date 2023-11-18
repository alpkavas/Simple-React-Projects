import { useField } from "formik";
import React from "react";

function CustomSelect({ label, ...probs }) {
  const [field, meta] = useField(probs);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...probs}
        className={meta.error ? "inputError" : ""}
      />
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomSelect;
