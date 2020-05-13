import React from "react";
import {connect} from 'react-redux'
import {createModalBoardsOpen} from '../../../redux/controller/controllerActions'
import css from './CreateBoardButton.module.scss'

const CreateBoardButton = ({handleBoardModalOpen}) => {
  return (
      <div
      onClick={handleBoardModalOpen}
          className={css.container}>
        <p>CreateBoardButton</p>
      </div>
  )
}

const mDTP = {
  handleBoardModalOpen : createModalBoardsOpen
}

export default connect(null, mDTP)(CreateBoardButton)