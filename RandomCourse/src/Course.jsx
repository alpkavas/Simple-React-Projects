import React from "react";
import "./course.css";

import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
};

/* img yolunu verebilmek için  courseMap isimli bir obje oluşturduk key value eşit old için A:A şeklinde yazmadık*/

function Course({ courseName }) {
  return (
    <div className="courseDiv">
      <img className="image" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;