import React from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleDeleteBoard} from '../../redux/boards/boardsOperations'
import {localDateParse} from '../../helpers/parseDate.helpers'
import css from './BoardsDraw.module.scss'
import Icon from "../../Icon/Icon";

const BoardsDraw = ({dateEnd, dateStart, _id, onDelete}) => {
  const history = useHistory()
  const start = localDateParse(dateStart)
  const end = localDateParse(dateEnd)
  const {StarIcon, DeleteIcon} = Icon()

  const handleCardClick = e => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'svg' ||
        e.target.tagName === 'path') {
      return null
    }
    history.push(`/boards/${_id}`)
  }

  const handleButtonDelete = () => {
    onDelete(_id)
  }

  const handleButtonStar = () => {
    console.log('BUTTON STAR')
  }

    return (
      <div className={css.container} onClick={handleCardClick}>
        <div className={css.container__inner}>
          <div className={css.container__inner__content}>
            <div className={css.content}>
              <div className={css.tileFade}>

                {/*HOVER BUTTON*/}
                <div className={css.control}>
                  <div className={css.control__left}>
                    <button className={css.button}
                            name='delete'
                            onClick={handleButtonDelete}>
                      <DeleteIcon/>
                    </button>
                  </div>
                  <div className={css.control__right}>
                    <button className={css.button}
                            name='star'
                            onClick={handleButtonStar}>
                      <StarIcon/>
                    </button>
                  </div>
                </div>

                {/*CONTENT*/}
                <div className={css.date}>
                  <div className={css.date__block}>
                    <p className={css.date__block__time}>{start.day}</p>
                    <p className={css.date__block__time}>{start.month}</p>
                    <p className={css.date__block__time}>{start.year}</p>
                  </div>
                  <div className={css.date__line}/>
                  <div className={css.date__block}>
                    <p className={css.date__block__time}>{end.day}</p>
                    <p className={css.date__block__time}>{end.month}</p>
                    <p className={css.date__block__time}>{end.year}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const mDTP = {
  onDelete : handleDeleteBoard
}

export default connect(null, mDTP)(BoardsDraw)