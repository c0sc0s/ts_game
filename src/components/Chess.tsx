import { ReactElement } from "react";
import { ChessType } from "../types/ChessTypes";
import "./Chess.css";

interface IProps {
  type: ChessType;
  onClick?: () => void;
}

const Chess: React.FC<IProps> = ({ type, onClick }) => {
  let chess: ReactElement | null = null;
  if (type === ChessType.red) {
    chess = (<div className="red-chess chess-item"></div>)
  }
  else if (type === ChessType.blue) {
    chess = (<div className="blue-chess chess-item"></div>)
  }

  const clickHandler = () => {
    if (chess) return;
    onClick && onClick();
  }


  return (
    <div className="Chess" onClick={clickHandler}>
      {chess}
    </div>
  )
}

export default Chess;