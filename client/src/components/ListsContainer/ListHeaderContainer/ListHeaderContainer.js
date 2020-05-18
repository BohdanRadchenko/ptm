import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAccessUsers} from '../../../redux/users/usersOperations'
import {getAccessUsers} from '../../../redux/users/usersSelectors'
import {localDateParse} from "../../../helpers/parseDate.helpers";
import Icon from "../../../Icon/Icon";
import ListHeaderAccess from "./ListHeaderAccess/ListHeaderAccess";
import css from './ListHeaderContainer.module.scss'

const ListHeaderContainer = ({access, author, _id, dateEnd, dateStart, onDelete, handleAccessUsers, accessUsers}) => {
  const history = useHistory()
  const start = localDateParse(dateStart)
  const end = localDateParse(dateEnd)
  const {StarIcon, DeleteIcon} = Icon()

  useEffect(() => {
    handleAccessUsers(access)
  }, [access, handleAccessUsers])

  const handleBoardDelete = () => {
    onDelete(_id)
    history.push('/boards')
  }

  return (
      <div className={css.board}>

        {/*HEADER BOARD DATE*/}
        <div className={css.board__date}>
          <div className={css.board__date__inner}>
            <p>{start.day}</p>
            <p>{start.month}</p>
            <p>{start.year}</p>
          </div>
          <div className={css.board__date__inner}>
            <p>{end.day}</p>
            <p>{end.month}</p>
            <p>{end.year}</p>
          </div>
        </div>

        <div className={css.board__line}/>

        {/*HEDER BOARD DELETE*/}
        <div className={css.board__star}>
          <div className={css.board__star__inner}>
            <div className={css.board__star__inner__content}>
              <button
                  onClick={handleBoardDelete}
                  className={css.button}>
                <DeleteIcon/>
              </button>
            </div>
          </div>
        </div>

        <div className={css.board__line}/>

        {/*HEDER BOARD STAR*/}
        <div className={css.board__star}>
          <div className={css.board__star__inner}>
            <div className={css.board__star__inner__content}>
              <button className={css.button}>
                <StarIcon/>
              </button>
            </div>
          </div>
        </div>

        <div className={css.board__line}/>

        {/*HEDER BOARD PERSONAL*/}
        <div className={css.board__personal}>
          Personal
        </div>

        <div className={css.board__line}/>

        {/*HEDER BOARD PERSONAL*/}
        <div className={css.board__personal}>
          Private
        </div>

        <div className={css.board__line}/>

        {/*HEDER BOARD ACCESS*/}
        <div className={css.board__access}>
          {!!accessUsers.length && (
              <ListHeaderAccess
                  access={access}
                  users={accessUsers}
                  authorId={author}/>
          )}
        </div>

      </div>
  )
}

const mSTP = state => (
    {
      accessUsers: getAccessUsers(state)
    }
)

const mDTP = {
  handleAccessUsers: handleAccessUsers
}

export default connect(mSTP, mDTP)(ListHeaderContainer)