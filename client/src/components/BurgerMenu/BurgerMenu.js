import React, {createRef} from 'react'
import {connect} from 'react-redux'
import {burgerMenu} from '../../redux/controller/controllerSelectors'
import {handlerBurgerClose} from '../../redux/controller/controllerActions'
import css from './BurgerMenu.module.scss'

const BurgerMenu = ({isOpen, onClose, children}) => {
  const backdropRef = createRef();

  const handleBackdropClick = e => {
    const {current} = backdropRef;
    if (current && e.target !== current) {
      return;
    }
    onClose();
  };

  // if(!isOpen) {
  //   return null
  // }

  return (
      <div
          onClick={handleBackdropClick}
          ref={backdropRef}
          className={isOpen ? css.modal : css.modalClose}>
        <div className={isOpen
            ? css.modal__content
            : css.modalClose__content}>
          Burger Menu
          {children}
        </div>
      </div>
  )
}

const mSTP = state => (
    {
      isOpen: burgerMenu(state)
    }
)

const mDTP = {
  onClose: handlerBurgerClose
}

export default connect(mSTP, mDTP)(BurgerMenu)