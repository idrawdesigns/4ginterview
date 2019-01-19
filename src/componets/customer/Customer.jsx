import React, { Component } from 'react'
import BankDropdown from '../utils/BankDropdown'
import './Customer.css'

import CustomerList from '../customer/CustomerList'
import AddCustomerForm from './AddCustomerForm'

class Customer extends Component {
  state = {
    customers: [
      {
        id: 0,
        firstname: 'Donald',
        lastname: 'Kimeu',
        email: 'example@mail.com',
        mobile: '0722678901',
        branch: 'Branch 1'
      },
      {
        id: 1,
        firstname: 'Esther',
        lastname: 'Mamu',
        email: 'yoe@mail.com',
        mobile: '0711118901',
        branch: 'Branch 2'
      },
      {
        id: 2,
        firstname: 'Mike',
        lastname: 'Lobi',
        email: 'me@mail.com',
        mobile: '07000000',
        branch: 'Branch 3'
      }
    ]
  }

  addCustomer = customer => {
    customer.id = Math.random()
    let customers = [...this.state.customers, customer]
    this.setState({
      customers
    })
  }

  render() {
    return (
      <div>
        <div className="customer-wrapper">
          <div className="top-nav">
            <BankDropdown />
            <AddCustomerForm addCustomer={this.addCustomer} />
          </div>

          <div className="form-area">
            <CustomerList customers={this.state.customers} />
          </div>
        </div>
      </div>
    )
  }
}

export default Customer
