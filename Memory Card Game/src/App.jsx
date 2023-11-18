import { useEffect, useState } from "react";
import "./App.css";
import MemoryCard from "./components/MemoryCard";

const cardList = [
  { path: "/public/img/1.jpeg", matched: false },
  { path: "/public/img/2.jpeg", matched: false },
  { path: "/public/img/3.jpeg", matched: false },
  { path: "/public/img/4.jpeg", matched: false },
  { path: "/public/img/5.jpeg", matched: false },
  { path: "/public/img/6.jpeg", matched: false },
  { path: "/public/img/7.jpeg", matched: false },
  { path: "/public/img/8.jpeg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const preCard = () => {
    //Her seferinde rastgele bir şekilde kartlar sıralanır.

    const sortedCard = [...cardList, ...cardList]
      .sort(() => 0.5 - Math.random())
      .map(card => ({ ...card, id: Math.random() }));

    setCards(sortedCard);
    setSelectedOne(null);
    setSelectedTwo(null);
    setDisabled(false);
    setScore(0);
  };

  const handleClick = card => {
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card);
  };

  useEffect(() => {
    preCard();
  }, []);

  useEffect(() => {
    if (selectedOne && selectedTwo) {
      setDisabled(true);
      if (selectedOne.path === selectedTwo.path) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.path === selectedOne.path) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        greatReset();
      } else {
        setTimeout(() => {
          greatReset();
        }, 1000);
      }
    }
  }, [selectedOne, selectedTwo]);

  const greatReset = () => {
    setSelectedOne(null);
    setSelectedTwo(null);
    setDisabled(false);
    setScore(prevScore => prevScore + 1);
  };

  return (
    <div className="container">
      <h1>Memory App</h1>
      <button className="btn-hover color-8" onClick={preCard}>
        Start
      </button>
      <p>{score}</p>
      <div className="card-grid">
        {cards.map(card => (
          <MemoryCard
            card={card}
            key={card.id}
            handleClick={handleClick}
            disabled={disabled}
            rotated={
              card === selectedOne || card === selectedTwo || card.matched
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
