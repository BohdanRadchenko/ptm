import React from "react";
import {connect} from 'react-redux'
import {createModalBoards} from '../../redux/controller/controllerSelectors'
import {createModalBoardsClose} from '../../redux/controller/controllerActions'
import {boardsCreate} from '../../redux/boards/boardsOperations'
import CreateBoardButton
  from "../Buttons/CreateBoardButton/CreateBoardButton";
import CreateModal from "../Modal/CreateModal/CreateModal";
import CreateBoardForm
  from "../Modal/CreateModal/CreateBoardForm/CreateBoardForm";
import css from './BoardsContainer.module.scss'

const BoardsContainer = ({isOpenModalBoards, handleCloseBoardModal, onCreate}) => {
  const handleCLose = () => {
    handleCloseBoardModal()
  }


  return (
      <>
        <div className={css.container}>
          BoardsContainer
          <CreateBoardButton/>
        </div>

        {isOpenModalBoards && (
            <CreateModal onClose={handleCLose}>
              <CreateBoardForm onClose={handleCLose} onCreate={onCreate}/>
            </CreateModal>
        )}
      </>
  )
}

const mSTP = state => (
    {
      isOpenModalBoards: createModalBoards(state)
    }
)

const mDTP = {
  handleCloseBoardModal: createModalBoardsClose,
  onCreate : boardsCreate
}

export default connect(mSTP, mDTP)(BoardsContainer)