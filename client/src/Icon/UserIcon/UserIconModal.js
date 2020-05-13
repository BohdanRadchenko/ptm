import React from "react";
import css from './UserIcon.module.scss'

const UserIconModal = ({name, email, onClose}) => {
  return (
      <div className={css.modal}>
        <div className={css.modal__user}>
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <div className={css.modal__profile}>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
  )
}

export default UserIconModal