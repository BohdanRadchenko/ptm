import React from "react";
import {connect} from 'react-redux'
import {Droppable} from "react-beautiful-dnd"
import ListsCardDraw from "../ListsCardDraw/ListsCardDraw";
import css from './ListsDraw.module.scss'

const ListsDraw = ({id, title, cards, date}) => {

  return (
      <Droppable droppableId={String(id)}>
        {provided => (
            <ul {...provided.droppableProps}
                ref={provided.innerRef}
                className={css.containerWork}>

              <li className={css.listContainer} key={id}>
                <p className={css.title}>{title}</p>
                <div className={css.listDateWrapper}>
                  Date
                </div>
              </li>
              {cards && cards.map((card, index) => (
                  <li key={card.id}>
                    <ListsCardDraw {...card} index={index}/>
                  </li>
              ))}
              {provided.placeholder}
            </ul>
        )}
      </Droppable>
  )
}

const mDTP = {
}

export default connect(null, mDTP)(ListsDraw)