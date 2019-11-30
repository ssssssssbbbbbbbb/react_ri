import React from 'react';
import routeEach from "utils/routeEach"
import {HashRouter as Route,Switch,Redirect} from "react-router-dom"
import { RouteConfig } from './router';
class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <Route>
      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        {routeEach(RouteConfig)}
      </Switch>
      </Route>
    )
  }
}

export default App;
