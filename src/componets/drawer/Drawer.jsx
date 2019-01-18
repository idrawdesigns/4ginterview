import React from 'react'
import { NavLink } from 'react-router-dom'
import './Drawer.css'

const Drawer = () => {
  return (
    <div className="drawer-wrapper">
      <div className="logo" />
      <nav className="nav-items">
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/"
              className="link"
            >
              <span>
                <i className="fa fa-users" aria-hidden="true" />
              </span>
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              to="/loans"
              className="link"
            >
              <span>
                <i className="far fa-money-bill-alt" aria-hidden="true" />
              </span>
              Loans
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Drawer
