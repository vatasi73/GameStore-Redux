import React from "react";

export default function GameCover({ image = "" }) {
  return (
    <div
      className="game-cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}
