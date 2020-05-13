import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import {isAuthenticated} from '../redux/session/sessionSelectors'
import {Loaders} from "./Loaders/Loaders"
import {useRoutes} from "../routes";

const App = ({isAuthentication}) => {
  const routes = useRoutes(isAuthentication)

  return (
      <Suspense fallback={<Loaders/>}>
        <Router basename='/'>
          {routes}
        </Router>
      </Suspense>
  );
}

const mSTP = state => ({
      isAuthentication: isAuthenticated(state),
})

export default connect(mSTP)(App);
