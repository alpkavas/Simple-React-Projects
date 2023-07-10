function Course({ id, content, title, price, removeCourseOne }) {
  return (
    <div className="cards">
      <div className="title">
        <h2 className="titleHeader">{title}</h2>
        <h4 className="cardPrice">{price} &#8378;</h4>
      </div>
      <p>{content}</p>
      <button className="cardDeleteBtn" onClick={() => removeCourseOne(id)}>
        Sil
      </button>
    </div>
  );
}

export default Course;
