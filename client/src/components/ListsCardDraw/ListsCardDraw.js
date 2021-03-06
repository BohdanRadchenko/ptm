import React from "react";
import {Draggable} from 'react-beautiful-dnd'
import css from './ListsCardDraw.module.scss'

const ListsCardDraw = ({id, title, index}) => {

  return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <div ref={provided.innerRef}
                 {...provided.dragHandleProps}
                 {...provided.draggableProps}>
              <div className={css.container}>
                <p>{title}</p>
              </div>
            </div>
        )}
      </Draggable>
  )
}

export default ListsCardDraw