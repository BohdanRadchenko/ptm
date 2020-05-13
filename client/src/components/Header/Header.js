import React from "react";
import Icon from '../../Icon/Icon'
import UserIcon from "../../Icon/UserIcon/UserIcon";
import css from './Header.module.scss'

const Header = () => {
  const {HomeIcon, AppIcon, AddIcon} = Icon()
  return (
      <div className={css.container}>
        <header className={css.header}>
          <div className={css.header__left}>
            <div className={css.header__icon}>
              <AppIcon/>
            </div>
            <div className={css.header__icon}>
              <HomeIcon/>
            </div>
          </div>
          <div className={css.header__right}>
            <div className={css.header__icon}>
              <AddIcon/>
            </div>
            <div className={css.header__icon}>
              <UserIcon/>
            </div>
          </div>
        </header>
      </div>
  )
}

export default Header