import React from "react";
import {useHistory} from "react-router-dom";
import {localDateParse} from "../../../helpers/parseDate.helpers";
import css from './BoardsDrawMobile.module.scss'


const BoardsDrawMobile = ({dateEnd, dateStart, _id, onDelete}) => {
  const history = useHistory()
  const start = localDateParse(dateStart)
  const end = localDateParse(dateEnd)

  const handleClick = () => {
    console.log(`HANDLE CLICK BOARD CARD`, _id)
  }

  return (
      <div className={css.container} onClick={handleClick}>
        BoardsDrawMobile
      </div>
  )
}

export default BoardsDrawMobile