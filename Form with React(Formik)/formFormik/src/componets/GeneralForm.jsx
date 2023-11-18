import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values, actions);

  await new Promise(resolve => {
    setTimeout(resolve, 1000);
    actions.resetForm();
  });
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        repassword: "",
      },
      validationSchema: basicSchema, //index.jsx
      onSubmit,
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>E-mail:</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Mail adresinizi giriniz..."
            className={errors.email && touched.email ? "inputError" : ""}
          />
          {errors.email && touched.email ? (
            <p className="error">{errors.email}</p>
          ) : null}
        </div>
        <div className="inputDiv">
          <label>Yaş:</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder="Yaşınız..."
            className={errors.age && touched.age ? "inputError" : ""}
          />
          {errors.age && touched.age ? (
            <p className="error">{errors.age}</p>
          ) : null}
        </div>
        <div className="inputDiv">
          <label>Şifre:</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Lütfen şifrenizi giriniz"
            className={errors.password && touched.password ? "inputError" : ""}
          />
          {errors.password && touched.password ? (
            <p className="error">{errors.password}</p>
          ) : null}
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrarı:</label>
          <input
            type="password"
            value={values.repassword}
            onChange={handleChange}
            id="repassword"
            placeholder="Lütfen şifrenizi tekrar giriniz"
            className={
              errors.repassword && touched.repassword ? "inputError" : ""
            }
          />
          {errors.repassword && touched.repassword ? (
            <p className="error">{errors.repassword}</p>
          ) : null}
        </div>
        <button type="submit" className="saveButton" disabled={isSubmitting}>
          Kaydet
        </button>
        <Link className="formLink" to="/portal">
          Portala Git
        </Link>
      </form>
    </>
  );
}

export default GeneralForm;
