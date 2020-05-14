import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {
  AsyncAuth,
  AsyncBoard,
  AsyncList,
  AsyncHome
} from "./async.routes";

export const useRoutes = (isAuthentication) => {
  if (isAuthentication) {
    return (
        <Switch>
          <Route path="/boards/:id">
            <AsyncList/>
          </Route>

          <Route path="/boards" exact>
            <AsyncBoard/>
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
        {/*AUTH ROUTES*/}
        <Route path="/auth">
          <AsyncAuth/>
        </Route>

        <Redirect to="/auth"/>
      </Switch>
  )
}