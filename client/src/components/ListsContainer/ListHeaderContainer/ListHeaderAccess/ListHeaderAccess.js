import React, {useEffect} from "react";
import {accessUsers} from '../../../../helpers/access.helpers'
import css from './ListHeaderAccess.module.scss'

const ListHeaderAccess = ({author, access}) => {

  useEffect(() => {

  }, [access])

  // console.log('users', users)
  // console.log('author', author)
  // console.log('access', access)
  return (
      <div className={css.container}>
        ListHeaderAccess
      </div>
  )
}

export default ListHeaderAccess