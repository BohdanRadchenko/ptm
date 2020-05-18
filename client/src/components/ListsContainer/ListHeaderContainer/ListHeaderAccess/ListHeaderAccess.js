import React, {useState} from "react";
import splitUserName from "../../../../helpers/splitUserName.helpers";
import ListHeaderAccessInviteForm from "./ListHeaderAccessInviteForm";
import Icon from "../../../../Icon/Icon";
import css from './ListHeaderAccess.module.scss'

const ListHeaderAccess = ({authorId, users, access}) => {
  const {CapsIcon} = Icon()
  const [isOpen, setIsOpen] = useState(false)
  users.map(el => {
    el.split = splitUserName(el.name)
    return el
  })

  const handleInviteClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
      <div className={css.container}>

        {/*USER ICON*/}
        <div className={css.access}>
          <ul className={css.access__list}>
            {users.map(el => (
                <li key={el._id} className={el._id === authorId
                    ? css.access__list__itemAuthor
                    : css.access__list__item}>

                  {el._id === authorId && (
                      <div
                          className={css.access__list__itemAuthor__icon}>
                        <CapsIcon/>
                      </div>
                  )}

                  <p className={css.access__list__item__title}>{el.split}</p>

                  <div className={css.access__list__item__hover}>
                    <p>{el.name}</p>
                    <p>{el.email}</p>
                  </div>
                </li>
            ))}
          </ul>
        </div>

        {/*INVITE BUTTON*/}
        <div className={css.invite}>
          <button
              onClick={handleInviteClick}
              className={css.invite__button}>
            Invite
          </button>
        </div>

        {/*INVITE FORM*/}
        {isOpen && (
            <div
                className={css.formWrapper}>
              <ListHeaderAccessInviteForm
                  access={access}
                  onClose={handleClose}/>
            </div>
        )}


      </div>

  )
}

export default ListHeaderAccess