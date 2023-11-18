import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeDescription,
  changeCost,
} from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

function CourseForm() {
  const dispatch = useDispatch();

  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  console.log(name, description, cost);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCourse({ name, description, cost }));
  }

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-4">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad:</label>
            <input
              type="text"
              className="input is-expanded"
              onChange={(e) => {
                dispatch(changeName(e.target.value));
              }}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama:</label>
            <textarea
              type="text"
              className="input is-expanded"
              onChange={(e) => {
                dispatch(changeDescription(e.target.value));
              }}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat:</label>
            <input
              type="number"
              className="input is-expanded"
              onChange={(e) => {
                dispatch(changeCost(+e.target.value));
              }}
              value={cost}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-info">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
