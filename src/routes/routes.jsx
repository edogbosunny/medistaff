import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/home'
import NotFound from '../pages/not-found';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes;