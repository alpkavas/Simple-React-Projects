import React from "react";
import Container from "react-bootstrap/Container";

function Task(probs) {
  const handleDelete = () => {
    probs.onDelete(probs.id);
  };

  return (
    <Container fluid className="col-md-3 ">
      <div className="task__item">
        <h1>{probs.title}</h1>
        <p>{probs.content}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </Container>
  );
}

export default Task;
