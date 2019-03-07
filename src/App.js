import React, { Component } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export const routesHistory = [];

export default class App extends Component {

  getRouteHistory = () => {
    return JSON.parse(localStorage.getItem('routesHistory')) || [];
  }

  pushRouteHistory = (pathname) => {
    let routesHistory = this.getRouteHistory()
    localStorage.setItem('routesHistory', JSON.stringify([...routesHistory, pathname]));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    )
  }
} 