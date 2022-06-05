import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCurrentGame } from "../redux/games/reducer";
import GameBuy from "./GameBuy";
import GameCover from "./GameCover";
import GameGenre from "./GameGenre";

export default function GameItem({ game }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`${game.title}`);
  };

  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
}
