import "./App.css";
import Course from "./Course";
import { useState } from "react"; /* Do not forget import */

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)]; // Random bir değer alır 0 ile 3 arasında ve bu değer dizideki o sıradaki değeri döner.
}

function App() {
  const [courses, setCourses] = useState([]); /* This */

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); // dizinin içine ekliyerek devam eder.
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="AddBtn" onClick={handleClick}>
        Add Course
      </button>
      <div className="course">{courseList}</div>
    </div>
  );
}

export default App;
