import React from 'react'
import './Main.css'
import { Route, Switch } from 'react-router-dom'

//componets
import Header from './Header'

import Loans from '../loans/Loans'
import Customers from '../customer/Customer'

const Main = ({ toggle }) => {
  return (
    <main className="main-wrapper">
      <Header toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Customers} />
        <Route path="/loans" exact component={Loans} />
      </Switch>
    </main>
  )
}

export default Main
