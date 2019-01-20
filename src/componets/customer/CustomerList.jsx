import React from 'react'
import { Table, Alert } from 'reactstrap'

const CustomerList = ({ customers }) => {
  const customer = customers.length ? (
    customers.map((customer, index) => (
      <tr key={customer.email}>
        <th scope="row">{index + 1}</th>
        <td>{customer.firstname}</td>
        <td>{customer.lastname}</td>
        <td>{customer.email}</td>
        <td>{customer.mobile}</td>
        <td>{customer.branch}</td>
      </tr>
    ))
  ) : (
    <Alert color="warning">You have no Customers on the Database</Alert>
  )
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>EMAIL</th>
          <th>MOBILE</th>
          <th>BRANCH</th>
        </tr>
      </thead>
      <tbody>{customer}</tbody>
    </Table>
  )
}

export default CustomerList
