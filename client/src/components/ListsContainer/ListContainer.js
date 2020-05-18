import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {listsHandler, listsPatchHandler} from '../../redux/lists/listsOperations'
import {handleDeleteBoard} from '../../redux/boards/boardsOperations'
import {getBoards, getLists} from '../../redux/lists/listsSelectors'
import * as listsActions from '../../redux/lists/listsActions'
import {DragDropContext} from 'react-beautiful-dnd'
import ListsDraw from "../ListsDraw/ListsDraw";
import ListHeaderContainer
  from "./ListHeaderContainer/ListHeaderContainer";
import css from './ListContainer.module.scss'


const ListContainer = ({lists, board, handleDrag, handlerLists, handleDeleteBoard, handlePatchList}) => {
  const history = useHistory()
  const boardId = history.location.pathname.split('/')[2]

  useEffect(() => {
    handlerLists(boardId)
  }, [boardId, handlerLists])


  const onDragEnd = (result) => {
    const {destination, source, draggableId, type} = result
    if (!destination) return
    handleDrag(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
    )
    handlePatchList({boardId, lists})
  }

  return (
      <div className={css.container}>

        {/*HEADER*/}
        <div className={css.header}>
          {board && (
              <ListHeaderContainer {...board} onDelete={handleDeleteBoard}/>
          )}
        </div>

        {/*MAIN*/}
        <main className={css.main}>
          <div className={css.main__left}>
            {/*LEFT MENU*/}
            LEFT SIDE
          </div>
          <div className={css.main__right}>
            {/*LISTS*/}
            <DragDropContext onDragEnd={onDragEnd}>
              <ul className={css.list}>
                {lists && lists.lists.map(list => (
                    <li
                        key={list.id}
                        className={css.list__item}>
                      <ListsDraw  {...list}/>
                    </li>
                ))}
              </ul>
            </DragDropContext>
          </div>
        </main>
      </div>
  )
}

const mSTP = state => (
    {
      lists: getLists(state),
      board: getBoards(state),
    }
)

const mDTP = {
  handlerLists: listsHandler,
  handlePatchList: listsPatchHandler,
  handleDrag: listsActions.handleDrag,
  handleDeleteBoard: handleDeleteBoard,

}

export default connect(mSTP, mDTP)(ListContainer)