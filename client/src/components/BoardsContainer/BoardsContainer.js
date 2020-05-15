import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {createModalBoards} from '../../redux/controller/controllerSelectors'
import {createModalBoardsClose} from '../../redux/controller/controllerActions'
import {
  handlerBoardsAll,
  loading
} from '../../redux/boards/boardsSelectors'
import {
  handleBoardCreate,
  handleBoards,
} from '../../redux/boards/boardsOperations'
import CreateModal from "../Modal/CreateModal/CreateModal";
import CreateBoardForm
  from "../Modal/CreateModal/CreateBoardForm/CreateBoardForm";
import BoardsList from "../BoardsList/BoardsList";
import BoardsMenu from "../BoardsMenu/BoardsMenu";
import {LoadersScreen} from "../Loaders/LoadersScreen";
import css from './BoardsContainer.module.scss'


const BoardsContainer = ({handleBoards, boards, isOpenModalBoards, handleCloseBoardModal, onCreate, onDelete, loading}) => {

  useEffect(() => {
    const poll = setInterval(() => {
      handleBoards()
    }, 2000)
    return () => {
      clearInterval(poll)
    }
  }, [handleBoards])

  const handleCLose = () => {
    handleCloseBoardModal()
  }

  return (
      <>
        {/*LOADING*/}
        {loading && <LoadersScreen/>}

        <div className={css.container}>
          <div className={css.container__menu}>
            <BoardsMenu/>
          </div>
          <div className={css.container__list}>
            <BoardsList boards={boards}/>
          </div>
        </div>

        {isOpenModalBoards && (
            <CreateModal onClose={handleCLose}>
              <CreateBoardForm onClose={handleCLose}
                               onCreate={onCreate}/>
            </CreateModal>
        )}
      </>
  )
}

const mSTP = state => (
    {
      isOpenModalBoards: createModalBoards(state),
      boards: handlerBoardsAll(state),
      loading: loading(state),
    }
)

const mDTP = {
  handleCloseBoardModal: createModalBoardsClose,
  onCreate: handleBoardCreate,
  handleBoards: handleBoards,
}

export default connect(mSTP, mDTP)(BoardsContainer)