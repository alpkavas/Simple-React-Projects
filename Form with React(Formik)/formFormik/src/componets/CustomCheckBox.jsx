import { useField } from "formik";
import React from "react";

function CustomCheckBox({ ...probs }) {
  const [field, meta] = useField(probs);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...probs}
          className={meta.error ? "inputError" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum.</span>
      </div>
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckBox;
