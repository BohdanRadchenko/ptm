import React from "react";
import {connect} from 'react-redux'
import {createModalBoardsOpen} from '../../../redux/controller/controllerActions'
import css from './CreateBoardButton.module.scss'

const CreateBoardButton = ({handleBoardModalOpen}) => {
  return (
      <button className={css.container}
              onClick={handleBoardModalOpen}>
        <div className={css.container__inner}>
          <div className={css.container__inner__content}>
            <div className={css.content}>
              <p>
                Create new Board
              </p>
            </div>
          </div>
        </div>
      </button>
  )
}

const mDTP = {
  handleBoardModalOpen: createModalBoardsOpen
}

export default connect(null, mDTP)(CreateBoardButton)