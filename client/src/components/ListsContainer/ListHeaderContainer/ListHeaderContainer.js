import React from "react";
import {localDateParse} from "../../../helpers/parseDate.helpers";
import css from './ListHeaderContainer.module.scss'

//access: ["5ebc4015f51a0842b8cfaeb0"]
// author: "5ebc4015f51a0842b8cfaeb0"
// dateEnd: "2020-05-22T21:00:00.000Z"
// dateStart: "2020-05-16T21:00:00.000Z"
// _id: "5ec07d829a8f0306cc3e11e8"

const ListHeaderContainer = ({access, author, _id, dateEnd, dateStart,}) => {
  const start = localDateParse(dateStart)
  const end = localDateParse(dateEnd)

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

        {/*HEDER BOARD STAR*/}
        <div className={css.board__star}>
          start
        </div>

        {/*HEDER BOARD ACCESS*/}
        <div className={css.board__access}>
          access
        </div>

      </div>
  )
}

export default ListHeaderContainer