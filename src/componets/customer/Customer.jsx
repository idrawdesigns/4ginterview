import React, { Component } from 'react'
import BankDropdown from '../utils/BankDropdown'
import './Customer.css'

import CustomerList from '../customer/CustomerList'

export default class Customer extends Component {
  render() {
    return (
      <div className="customer-wrapper">
        <div className="top-nav">
          <BankDropdown />
          <button className="add-btn">Add Customer</button>
        </div>

        <div className="form-area">
          <CustomerList />
        </div>
      </div>
    )
  }
}
