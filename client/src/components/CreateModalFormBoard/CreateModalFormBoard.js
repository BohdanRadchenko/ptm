import React from "react";
import css from './CreateModalFormBoard.module.scss'
import {NavLink} from "react-router-dom";

const CreateModalFormBoard = ({onClose}) => {

  const handleBoardOpen = e => {
    console.log('handleBoardOpen')
    onClose()
  }

  return (
      <div className={css.modal}>

        <div className={css.modal__block}>
          <p className={css.modal__block__title}>Create</p>
        </div>

        <div className={css.modal__block}>

          <button onClick={handleBoardOpen}
                  className={css.modal__block__nav}>
            <h2 className={css.modal__block__nav__title}>Create
              Board...</h2>
            <p className={css.modal__block__nav__subtitle}>A board is
              made up of cards ordered on lists. Use it to
              manage projects, track information, or organize
              anything.</p>
          </button>

          <NavLink to="/student"
                   className={css.modal__block__nav}>
            <h2 className={css.modal__block__nav__title}>Create
              Student..</h2>
            <p className={css.modal__block__nav__subtitle}>A students
              is a group of people. Use this to create
              your own student database for easy use this application,
              management and statistics.</p>
          </NavLink>

          <NavLink to="/team"
                   className={css.modal__block__nav}>
            <h2 className={css.modal__block__nav__title}>Create
              Team...</h2>
            <p className={css.modal__block__nav__subtitle}>A team is a
              group of boards and people. Use it to
              organize your company, side hustle, family, or
              friends.</p>
          </NavLink>

        </div>

      </div>
  )
}

export default CreateModalFormBoard