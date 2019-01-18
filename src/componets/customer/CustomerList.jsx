import React from 'react'
import { Table } from 'reactstrap'

const CustomerList = () => {
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
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>077237900</td>
          <td>Branch 1</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>077237900</td>
          <td>Branch 2</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>077797900</td>
          <td>Branch 3</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CustomerList
