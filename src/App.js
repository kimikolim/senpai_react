import React, { Component } from 'react'
import Home from './components/pages/Home'
import Catalog from './components/pages/Catalog'
import Signup from './components/pages/Signup'
import ErrorPage from './components/pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


export class App extends Component {

  render() {
    return (
    <Router>

     <Header/>

        <Switch>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/category">
            <Catalog/>
          </Route>
          <Route path="/register">
            <Signup/>
          </Route>
          <Route path="/">
            <Home />
          </Route>

          <Route path='*'>
            <ErrorPage/>
          </Route>
          
        </Switch>

      </Router>
    )
  }
}

export default App

