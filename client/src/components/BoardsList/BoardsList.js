import React from "react";
import css from './BoardsList.module.scss'
import CreateBoardButton
  from "../Buttons/CreateBoardButton/CreateBoardButton";
import BoardsDraw from "../BoardsDraw/BoardsDraw";

const BoardsList = ({boards}) => {
  if (!boards) {
    return null
  }

  return (
      <div className={css.container}>
        <div className={css.board}>
          <h1 className={css.board__title} >Personal Boards</h1>
          <ul className={css.list}>
            <>
              {boards.map(board => (
                  <li key={board._id} className={css.list__item}>
                    <BoardsDraw {...board}/>
                  </li>
              ))}
              <li key={'create_button'} className={css.list__item}>
                <CreateBoardButton/>
              </li>
            </>
          </ul>
        </div>
      </div>
  )
}

export default BoardsList