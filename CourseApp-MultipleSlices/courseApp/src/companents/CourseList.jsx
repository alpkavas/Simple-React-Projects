import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();

  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourse = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { courses: filteredCourse };
  });

  const courseInfo = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.cost}</p>
        <button
          className="button is-danger"
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}>
          Sil
        </button>
      </div>
    );
  });

  return <div className="courseList">{courseInfo}</div>;
}

export default CourseList;
