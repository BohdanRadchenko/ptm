import React, {useState} from "react";
import {connect} from 'react-redux'
import {createModalBoardsOpen} from '../../../redux/controller/controllerActions'
import css from './CreateBoardButtonMobile.module.scss'

const CreateBoardButtonMobile = ({createModalBoardsOpen}) => {
  const [isOpen, setIsOpen] = useState(false)

  console.log(isOpen)

  const handleButtonClick = () => {
    // createModalBoardsOpen()
    setIsOpen(!isOpen)
  }

  return (
      <>
        {/*BUTTON*/}
        <button onClick={handleButtonClick}
            className={css.button}>
          <div className={isOpen
              ? css.button__one__open
              : css.button__one}/>
          <div className={isOpen
              ? css.button__two__open
              : css.button__two}/>
        </button>




      </>
  )
}

const mDTP = {
  createModalBoardsOpen: createModalBoardsOpen
}

export default connect(null, mDTP)(CreateBoardButtonMobile)