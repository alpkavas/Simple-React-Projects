import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h1>Kurslarım</h1>
      </div>
      <div className="cardDiv">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeCourseOne={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
