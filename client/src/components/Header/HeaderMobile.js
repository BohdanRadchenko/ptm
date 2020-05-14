import React from "react";
import {connect} from 'react-redux'
import {handlerBurgerOpen} from '../../redux/controller/controllerActions'
import css from './HeaderMobile.module.scss'

const HeaderMobile = ({headerType, onOpen}) => {

  const handleBurgerClick = () => {
    onOpen()
  }

  return (
      <header className={css.header}>
        {/*BURGER*/}
        <div className={css.header__burger}>
          <button
              onClick={handleBurgerClick}
              className={css.burger}>
            <div className={css.burger__one}/>
            <div className={css.burger__two}/>
            <div className={css.burger__three}/>
          </button>
        </div>

        {/*MAIN*/}
        <div className={css.header__main}>
          {headerType}
        </div>

        {/*NOTIFY*/}
        <div className={css.header__noty}>
          Noty
        </div>
      </header>
  )
}

const mDTP = {
  onOpen: handlerBurgerOpen
}

export default connect(null, mDTP)(HeaderMobile)