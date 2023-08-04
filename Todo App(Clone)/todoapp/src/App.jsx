import "./App.css";
import { TodoContextProvider } from "./TodoContext/TodoContext";
import Content from "./components/Content/index";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <TodoContextProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoContextProvider>
  );
}

export default App;
