import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
  AsyncAuth,
  AsyncBoards,
  AsyncBoardsLists,
  AsyncHome
} from "./async.routes";

export const useRoutes = (isAuthentication) => {
  if (isAuthentication) {
    return (
        <Switch>
          {/*AUTH ROUTES*/}
          <Route path="/boards/:id">
            <AsyncBoardsLists/>
          </Route>

          <Route path="/boards" exact>
            <AsyncBoards/>
          </Route>

          <Route path="/home">
            <AsyncHome/>
          </Route>
          <Redirect to="/boards"/>
          {/*<Redirect to="/home"/>*/}
        </Switch>
    )
  }
  return (
      <Switch>
        {/*AUTH*/}
        <Route path="/auth">
          <AsyncAuth/>
        </Route>

        <Redirect to="/auth"/>
      </Switch>
  )
}