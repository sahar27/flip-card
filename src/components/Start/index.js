import React, { useState } from "react";
import Board from "../Board";
import "./style.css";

function Start() {
  const [options, setOptions] = useState(null);

  return (
    <>
      <div className="containerStart">
        <h1 className="title">Flip Card Game</h1>
        <div className="btnStart">
          {options === null ? (
            <div className="btns">
              <button className="btn1" onClick={() => setOptions(6)}>
                Easy
              </button>
              <br />
              <button className="btn2" onClick={() => setOptions(12)}>
                Medium
              </button>
              <br />
              <button className="btn3" onClick={() => setOptions(24)}>
                Hard
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn4"
                onClick={() => {
                  const prevOptions = options;
                  setOptions(null);
                  setTimeout(() => {
                    setOptions(prevOptions);
                  }, 5);
                }}
              >
                Restart
              </button>
              <button className="btn3" onClick={() => setOptions(null)}>
                Home
              </button>
            </>
          )}
        </div>

        {options ? (
          <Board options={options} setOptions={setOptions} />
        ) : (
          <div className="instr">
            <h2 className="start">Let's Start!</h2>
            <p>
              Matching card game for 7-year-olds and up providing fast-paced fun
              that moves at the speed of flipping!
            </p>
            <p>
              Gameplay is so easy to understand, young kids can play
              independently
            </p>
            <p>
              Kids will love flipping through cards to find a match{" "}
              <span className="heart">♥</span>
            </p>
            <div className="info">
              <p>👥 Age 7+</p>
              <p>💡 + Boosts memory and recall</p>
            </div>
            <p className="inf"> + Increases retention of information</p>
          </div>
        )}
      </div>
      <div className="backgroundStart">
        <div className="shape1 animated"></div>
        <div className="shape2 animated"></div>
        <div className="shape3 animated"></div>
        <div className="shape4 animated"></div>
        <div className="shape5 animated"></div>
        <div className="shape6 animated"></div>
      </div>
    </>
  );
}

export default Start;
