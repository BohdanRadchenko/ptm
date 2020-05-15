import React, {useState} from "react";
import {connect} from 'react-redux'
import {createModalBoardsOpen} from '../../../redux/controller/controllerActions'
import css from './CreateBoardButtonMobile.module.scss'

const CreateBoardButtonMobile = ({createModalBoardsOpen}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const handleButtonCreateBoardClick = () => {
    console.log('BUTTON CLICK CREATE BOARD')
    createModalBoardsOpen()
    setIsOpen(false)
  }

  const handleButtonCreateStudentClick = () => {
    console.log('BUTTON CLICK CREATE STUDENT')
    setIsOpen(false)
  }

  const handleButtonCreateTeamClick = () => {
    console.log('BUTTON CLICK CREATE TEAM')
    setIsOpen(false)
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

        {/*BACKGROUND*/}
        {/*{isOpen && (*/}
        <div className={isOpen
            ? css.background
            : css.background__close}>
          <div className={css.createButton}>
            <button
                onClick={handleButtonCreateBoardClick}
                className={isOpen
                    ? css.createButton__board
                    : css.createButton__close}>
              B
            </button>
            <button
                onClick={handleButtonCreateStudentClick}
                className={isOpen
                    ? css.createButton__student
                    : css.createButton__close}>
              S
            </button>
            <button
                onClick={handleButtonCreateTeamClick}
                className={isOpen
                    ? css.createButton__team
                    : css.createButton__close}>
              T
            </button>
          </div>
        </div>
        {/*)}*/}

      </>
  )
}

const mDTP = {
  createModalBoardsOpen: createModalBoardsOpen
}

export default connect(null, mDTP)(CreateBoardButtonMobile)