import { ChessType } from "../types/ChessTypes";
import Chess from "./Chess";
import "./Board.css"

interface IProps {
  chesses: ChessType[][];
  isOver?: boolean;
  onClick?: (x: number, y: number) => void;
}

const Board: React.FC<IProps> = ({ chesses, onClick, isOver }) => {

  const list = chesses.map((i, x) => {
    return i.map((i2, y) => {
      return <Chess type={i2} onClick={() => { onClick && onClick(x, y) }}></Chess>
    })
  })

  console.log(list)
  return (
    <div className="board">
      {list}
    </div>
  )
}


Board.defaultProps = {
  isOver: false
}
export default Board;