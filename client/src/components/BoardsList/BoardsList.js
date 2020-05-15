import React from "react";
import CreateBoardButton
  from "../Buttons/CreateBoardButton/CreateBoardButton";
import BoardsDraw from "../BoardsDraw/BoardsDraw";
import BoardsDrawMobile
  from "../BoardsDraw/BoardsDrawMobile/BoardsDrawMobile";
import CreateBoardButtonMobile
  from "../Buttons/CreateBoardButtonMobile/CreateBoardButtonMobile";
import css from './BoardsList.module.scss'


const BoardsList = ({boards}) => {
  if (!boards) {
    return null
  }

  return (
      <div className={css.container}>
        <div className={css.board}>
          <h1 className={css.board__title}>Personal Boards</h1>
          <ul className={css.list}>
            <>
              {boards.map(board => (
                  <li key={board._id} className={css.list__item}>
                    <BoardsDraw {...board}/>
                    <BoardsDrawMobile {...board}/>
                  </li>
              ))}
              <li key={'create_button'}
                  className={`${css.list__item} ${css.createButton}`}>
                <CreateBoardButton/>
              </li>

              <CreateBoardButtonMobile/>
            </>
          </ul>
        </div>
      </div>
  )
}

export default BoardsList