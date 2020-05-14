import React, {useState} from "react";
import Icon from '../../Icon/Icon'
import UserIcon from "../../Icon/UserIcon/UserIcon";
import HeaderModal from "../Modal/HeaderModal/HeaderModal";
import HeaderModalAdd
  from "../Modal/HeaderModal/HeaderModalAdd/HeaderModalAdd";
import css from './Header.module.scss'

const Header = () => {
  const {HomeIcon, AppIcon, AddIcon} = Icon()
  const [addIsOpen, setIsOpen] = useState(false)

  const handleModalOpen = e => {
    setIsOpen(true)
  }

  const handleModalClose = e => {
    setIsOpen(false)
  }


  return (
      <>
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
              <div
                  onClick={handleModalOpen}
                  className={css.header__icon}>
                <AddIcon/>
              </div>
              <div className={css.header__icon}>
                <UserIcon/>
              </div>
            </div>
          </header>
        </div>

        {/*MODAL PROFILE*/}
        {addIsOpen && (
            <HeaderModal onClose={handleModalClose}>
              <HeaderModalAdd onClose={handleModalClose} board/>
            </HeaderModal>
        )}
      </>
  )
}

export default Header