import "bulma/css/bulma.css";
import "./App.css";
import { Course } from "./Course";
import Angular from "./assets/images/angular.jpg";
import Bootstrap from "./assets/images/bootstrap5.png";
import CCourse from "./assets/images/ccsharp.png";
import WebCourse from "./assets/images/kompleweb.jpg";

function App() {
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem ut facilis natus dicta adipisci sequi minus quasi aut officiis aspernatur a dignissimos culpa ipsa, sunt suscipit animi nemo exercitationem? Voluptatibus, dolorum. A quisquam maxime deleniti, tempora voluptas nihil dolores sint amet natus repudiandae asperiores et consequatur at nisi neque aspernatur, laboriosam ea similique facilis nam dolorem corporis odit ipsum."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem ut facilis natus dicta adipisci sequi minus quasi aut officiis aspernatur a dignissimos culpa ipsa, sunt suscipit animi nemo exercitationem? Voluptatibus, dolorum. A quisquam maxime deleniti, tempora voluptas nihil dolores sint amet natus repudiandae asperiores et consequatur at nisi neque aspernatur, laboriosam ea similique facilis nam dolorem corporis odit ipsum."
              />
            </div>
            <div className="column">
              <Course
                image={CCourse}
                title="C C#"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem ut facilis natus dicta adipisci sequi minus quasi aut officiis aspernatur a dignissimos culpa ipsa, sunt suscipit animi nemo exercitationem? Voluptatibus, dolorum. A quisquam maxime deleniti, tempora voluptas nihil dolores sint amet natus repudiandae asperiores et consequatur at nisi neque aspernatur, laboriosam ea similique facilis nam dolorem corporis odit ipsum."
              />
            </div>
            <div className="column">
              <Course
                image={WebCourse}
                title="Web Course"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem ut facilis natus dicta adipisci sequi minus quasi aut officiis aspernatur a dignissimos culpa ipsa, sunt suscipit animi nemo exercitationem? Voluptatibus, dolorum. A quisquam maxime deleniti, tempora voluptas nihil dolores sint amet natus repudiandae asperiores et consequatur at nisi neque aspernatur, laboriosam ea similique facilis nam dolorem corporis odit ipsum."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
