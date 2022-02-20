import React, { useState, useEffect } from "react";
import Board from "../Board";
import "./style.css";
import click from "../../sounds/click.wav";
import background from "../../sounds/background.wav";
import { GoUnmute, GoMute } from "react-icons/go";
import { FcIdea, FcBusinesswoman, FcBusinessman } from "react-icons/fc";


function Start() {
  const [options, setOptions] = useState(null);
  const [audio] = useState(new Audio(background));
  const [playing, setPlaying] = useState(true);
  let clickSound = new Audio(click);
  audio.loop = true;
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  const toggle = () => setPlaying(!playing);
  const playSound = () => {
    clickSound.play();
  };
  return (
    <>
      <div className="containerStart">
        <div className="soundIcon" onClick={() => toggle()}>
          {playing ? <GoUnmute /> : <GoMute />}
        </div>
        <h1 className="title">Flip Card Game</h1>
        <div className="btnStart">
          {options === null ? (
            <div className="btns">
              <button
                className="btn1"
                onClick={() => {
                  setOptions(6);
                  playSound();
                }}
              >
                Easy
              </button>
              <br />
              <button
                className="btn2"
                onClick={() => {
                  setOptions(12);
                  playSound();
                }}
              >
                Medium
              </button>
              <br />
              <button
                className="btn3"
                onClick={() => {
                  setOptions(24);
                  playSound();
                }}
              >
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
                  playSound();
                }}
              >
                Restart
              </button>
              <button
                className="btn3"
                onClick={() => {
                  setOptions(null);
                  playSound();
                }}
              >
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
              <p><FcBusinesswoman/><FcBusinessman/> Age 7+</p>
              <p><FcIdea/> + Boosts memory and recall</p>
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