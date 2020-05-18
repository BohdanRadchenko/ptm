import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAllUsers} from '../../../../redux/users/usersSelectors'
import {handleAllUsers} from '../../../../redux/users/usersOperations'
import {handleListAccess} from '../../../../redux/lists/listsOperations'
import {search} from "../../../../helpers/search.access.helpers";
import splitUserName from "../../../../helpers/splitUserName.helpers";
import css from './ListHeaderAccess.module.scss'

const ListHeaderAccessInviteForm = ({getAllUsers, users, access, onClose, addBoardAccess}) => {
  const history = useHistory()
  const boardId = history.location.pathname.split('/')[2]
  const defaultForm = {value: '', id: ''}
  const [form, setForm] = useState(defaultForm)
  const [send, setSend] = useState(false)

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  useEffect(() => {
    if (!form.id || !form.value) {
      setSend(false)
    }
  }, [form])

  const handleInputChange = e => {
    setForm({...form, value: e.target.value})
  }

  const handleItemClick = el => {
    setForm({...form, value: el.name, id: el._id})
    setSend(true)
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    if (form.id || boardId) {
      const data = {boardId, access : [...access, form.id]}
      addBoardAccess(data)
    }
    setForm(defaultForm)
  }

  const filter = search(users, form.value)

  return (
      <form
          onSubmit={handleSubmitForm}
          className={css.form}>
        {/*TITLE*/}
        <div className={css.form__title}>
          <h1 className={css.form__title__text}>Invite To Board</h1>
          <button
              onClick={onClose}
              className={css.form__title__close}>
            <div className={css.form__title__close__one}/>
            <div className={css.form__title__close__two}/>
          </button>
        </div>

        {/*INPUT*/}
        <input type="text"
               autoFocus
               placeholder='Email address or name...'
               value={form.value}
               onChange={handleInputChange}
               className={css.form__input}/>

        {/*FILTER*/}
        {filter && !!filter.length && (
            <ul className={css.form__list}>
              {filter.map(el => (
                  <li key={el._id}
                      onClick={!access.includes(el._id)
                          ? e => handleItemClick(el)
                          : null}
                      className={access.includes(el._id)
                          ? `${css.form__list__item} ${css.form__list__item__joinde}`
                          : css.form__list__item}>
                    <div className={css.form__list__item__icon}>
                      <p className={css.form__list__item__icon__name}>
                        {splitUserName(el.name)}
                      </p>
                    </div>
                    <div className={css.form__list__item__title}>
                      <p className={css.form__list__item__title__name}>{el.name}</p>
                      <p className={css.form__list__item__title__email}>{el.email}</p>
                    </div>
                  </li>
              ))}
            </ul>
        )}

        {/*BUTTON SUBMIT*/}
        <button
            disabled={!send}
            type='submit'
            className={css.form__button}>
          Send Invitation
        </button>
      </form>
  )
}

const mSTP = state => (
    {
      users: getAllUsers(state)
    }
)

const mDTP = {
  getAllUsers: handleAllUsers,
  addBoardAccess: handleListAccess
}

export default connect(mSTP, mDTP)(ListHeaderAccessInviteForm)