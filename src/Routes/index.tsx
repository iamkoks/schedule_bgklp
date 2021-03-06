import React, { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import SсhedulePage from '../pages/SchedulePage'
import TeachersPage from '../pages/TeachersPage'
import Contacts from '../components/Contacts'

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/schedule" component={SсhedulePage}/>
      <Route exact path="/disciplines" component={HomePage}/>
      <Route exact path="/directory" component={Contacts}/>
      <Route exact path="/teachers" component={TeachersPage}/>
      <Route exact path="/teachers/:teacher" component={HomePage}/>
      <Redirect to='/'/>
    </Switch>
  )
}
export default Routes
