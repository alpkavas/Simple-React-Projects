import "./App.css";
import CourseForm from "./companents/CourseForm";
import CourseList from "./companents/CourseList";
import CourseSearch from "./companents/CourseSearch";
import Value from "./companents/Value";

function App() {
  return (
    <div className="container is-fluid">
      <CourseForm />
      <CourseSearch />
      <CourseList />
      <Value />
    </div>
  );
}

export default App;
