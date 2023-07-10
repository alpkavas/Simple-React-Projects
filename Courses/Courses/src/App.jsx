import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Courses from "./Companents/Courses";
import Loading from "./Companents/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const newCoursesArrayAfterDeleted = courses.filter(
      (course) => course.id !== id
    );
    setCourses(newCoursesArrayAfterDeleted);
  };

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const res = await axios.get(" http://localhost:3000/courses");
      setCourses(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="courseMainDiv">
              <h2>Kursların hepsi silindi</h2>
              <button className="cardDeleteBtn" onClick={() => fetchCourse()}>
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </>
  );
}

export default App;
