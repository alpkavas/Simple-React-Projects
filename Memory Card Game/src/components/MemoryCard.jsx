import React from "react";
import "./MemoryCard.css";

export default function MemoryCard({ card, handleClick, disabled, rotated }) {
  const handleSelected = () => {
    !disabled ? handleClick(card) : null;
  };

  return (
    <div className="card">
      <div className={rotated ? "rotated" : ""}>
        <img src={card.path} className="cardFront" />
        <img
          src="/public/img/cover.jpeg"
          onClick={handleSelected}
          className="cardCover"
        />
      </div>
    </div>
  );
}
