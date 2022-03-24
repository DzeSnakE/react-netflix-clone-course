import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import BrowsePage from './pages/BrowsePage'
import NotFoundPage from './pages/NotFoundPage'

/*---> Component <---*/
const App = () => {
  return (
    <Router>
      <Route>
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/signin'>
          <SigninPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
        <Route path='/browse'>
          <BrowsePage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Route>
    </Router>
  )
}

export default App
