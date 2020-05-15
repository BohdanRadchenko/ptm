import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import {handleDeleteBoard} from '../../../redux/boards/boardsOperations'
import {localDateParse} from "../../../helpers/parseDate.helpers";
import css from './BoardsDrawMobile.module.scss'
import Icon from "../../../Icon/Icon";


const BoardsDrawMobile = ({dateEnd, dateStart, _id, onDelete}) => {
  const history = useHistory()
  const start = localDateParse(dateStart)
  const end = localDateParse(dateEnd)
  const {StarIcon, DeleteIcon} = Icon()

  const handleClick = () => {
    history.push(`/boards/${_id}`)
  }

  const handleClickStar = () => {
    console.log('CLICK STAR')
  }

  const handleClickDelete = () => {
    onDelete(_id)
  }

  return (
      <div className={css.container}>

        {/*COLOR EMBLEM*/}
        <div className={css.ratio} onClick={handleClick}>
          <div className={css.ratio__inner}>
            <div className={css.ratio__inner__content}/>
          </div>
        </div>

        {/*DATE WRAPPER*/}
        <div className={css.date} onClick={handleClick}>
          <div className={css.date__start}>
            <p className={css.date__text}>{start.day}</p>
            <p className={css.date__text}>{start.month}</p>
            <p className={css.date__text}>{start.year}</p>
          </div>
          <div className={css.date__line}/>
          <div className={css.date__end}>
            <p className={css.date__text}>{end.day}</p>
            <p className={css.date__text}>{end.month}</p>
            <p className={css.date__text}>{end.year}</p>
          </div>
        </div>

        {/*CONTROL BUTTON */}
        <div className={css.control}>
          <div className={css.control__star} onClick={handleClickStar}>
            <button className={css.button}>
              <StarIcon/>
            </button>
          </div>
          <div className={css.control__delete} onClick={handleClickDelete}>
            <button className={css.button}>
              <DeleteIcon/>
            </button>
          </div>
        </div>

      </div>
  )
}

const mDTP = {
  onDelete: handleDeleteBoard
}

export default connect(null, mDTP)(BoardsDrawMobile)