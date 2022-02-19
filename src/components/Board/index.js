import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./style.css";

function Board({ options }) {
  const [game, setGame] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [seconds, setSeconds] = useState(10);
  const [result, setResult] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const fronts = [
    '#9bd2f0',
    '#b49bf0',
    '#b9e18c',
    '#ffdc64',
    '#ffbe6e',
    '#ff9191'
  ];

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 10000);
    } else {
      setSeconds("Time is over!");
      setGame(
        game.map((item, i) => {
          return {
            ...item,
            flipped: true,
          };
        })
      );
    }
  });

  useEffect(() => {
    const newGame = [];
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: i,
        frontId: i,
        content: fronts[i],
        flipped: false,
        matched: false,
      };
      newGame.push(firstOption, firstOption);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    console.log(shuffledGame);
    setGame(shuffledGame);
    // console.log("shuffledGame arr", shuffledGame);
  }, []);

  const flipCardTo = (firstCard, cardId, flipped, matched) => {
    console.log("id ", cardId);
    setGame(
      game.map((item, i) => {
        if (i === cardId || firstCard == i) {
          return {
            ...item,
            flipped: flipped,
            matched: matched,
          };
        } else {
          return item;
        }
      })
    );
  };

  const isGameOver = () => {
    let done = true;
    game.forEach((card) => {
      if (!card.matched) done = false;
    });
    setGameOver(done);
    console.log("done? ", done);
  };

  const flip = (cardId) => {
    if (firstCard === null) {
      setFirstCard(cardId);
    } else {
      const firstCardContent = game[firstCard].frontId;
      const secondCardContent = game[cardId].frontId;
      if (firstCardContent === secondCardContent) {
        flipCardTo(firstCard, cardId, true, true);
        setResult(result + 1);
        setFirstCard(null);
        // console.log("same");
      } else {
        // console.log("diff");
        setTimeout(() => {
          flipCardTo(firstCard, cardId, false, false);
          setFirstCard(null);
        }, 1000);
      }
    }
    if (!game[cardId].matched) {
      flipCardTo(firstCard, cardId, !game[cardId].flipped, true);
    }
    isGameOver();
  };

  // console.log("game arr", game);

  if (game.lenght === 0) return <div>Loading...</div>;
  else {
    return (
      <>
          <div className="result">
            <p className="time">Time: {seconds}</p>
            <p>Score: {result}</p>
          </div>
          <div className="Board">
            {game.map((card, i) => {
              return (
                <div key={i}>
                  <Card
                    flip={() => {
                      flip(i);
                    }}
                    content={card.content}
                    flipped={card.flipped}
                  />
                </div>
              );
            })}
          </div>
      </>
    );
  }
}

export default Board;
