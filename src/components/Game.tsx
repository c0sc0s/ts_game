import { useState } from "react";
import { ChessType } from "../types/ChessTypes";
import { GameStatus } from "../types/GameStatus";
import Board from "./Board";

const hasWinner = (row: number, col: number, chesses: ChessType[]): boolean => {
  console.log(chesses)

  console.log(col)
  if ((chesses[row] === chesses[row - 1] && chesses[row] === chesses[row + 1] && chesses[row] !== ChessType.none)
    || (chesses[col] === chesses[col - 3] && chesses[col] === chesses[col + 3] && chesses[col] !== ChessType.none)
    || (chesses[0] === chesses[4] && chesses[4] === chesses[8] && chesses[4] !== ChessType.none)
    || (chesses[2] === chesses[4] && chesses[4] === chesses[6] && chesses[4] !== ChessType.none))
    return true;


  return false;
}


const Game: React.FC = () => {
  const [chesses, setChesses] = useState<ChessType[][]>(Array(3).fill(Array(3).fill(ChessType.none)));
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.gaming);
  const [nextChess, setNextChess] = useState<ChessType.red | ChessType.blue>(ChessType.red);



  const getGamingStatus = (chesses: ChessType[][], index: number): void => {


    // const row = Math.floor(index / 3) + 1;
    // const col = index % 3 + 1;

    // if (hasWinner(row, col, chesses))
    //   return nextChess === ChessType.red ? GameStatus.redWin : GameStatus.blueWin;
    // if (chesses.indexOf(ChessType.none) === -1) return GameStatus.draw;
    // return GameStatus.gaming;
  }



  const handleChessClicked = (x: number, y: number) => {
    if (chesses[x][y] !== ChessType.none) return;
    const newChesses: ChessType[][] = chesses.slice().map(i => i.slice());
    newChesses[x][y] = nextChess;

    setChesses(newChesses);

    setNextChess(preState => {
      return preState === ChessType.red ? ChessType.blue : ChessType.red;
    })

    // console.log(getGamingStatus(newChesses, i));
  }

  return (
    <div>
      <Board chesses={chesses}
        isOver={gameStatus !== GameStatus.gaming}
        onClick={handleChessClicked}
      ></Board>
    </div>
  )
}

export default Game;

