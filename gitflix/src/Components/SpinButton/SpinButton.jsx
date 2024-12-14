import React from "react";
import { Github } from "lucide-react";
import "./SpinButton.css";
import snd from "./../../assets/sound/whoosh.wav";

const SpinButton = ({ onSpin }) => {
  const handleSpin = () => {
    const audio = new Audio(snd);
    audio.play();
    onSpin();
  };

  return (
    <div className="spin-wheel-container">
      <button className="spin-wheel" onClick={handleSpin}>
        <div className="wheel-segments">
          <div className="segment red"></div>
          <div className="segment blue"></div>
          <div className="segment green"></div>
          <div className="segment yellow"></div>
        </div>
        <div className="wheel-center">
          <Github size={32} />
        </div>
      </button>
    </div>
  );
};

export default SpinButton;

