import React from "react";

export const Course = ({ title, description, image }) => {
  //   const title = probs.title;
  //   const description = probs.description;
  //   const { title, description } = probs; kullanılabilir.

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Course" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </>
  );
};
