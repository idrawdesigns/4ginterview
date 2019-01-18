import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class CustomerForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="First name">First Name</Label>
          <Input type="text" name="first" placeholder="First Name" />
        </FormGroup>

        <FormGroup>
          <Label for="Last name">Last Name</Label>
          <Input type="text" name="last" id="first" placeholder="Last Name" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@mail.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplemobile">Mobile Number</Label>
          <Input
            type="tel"
            name="mobile"
            id="examplePassword"
            placeholder="07XXXXXXXX"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Branch 1</option>
            <option>Branch 2</option>
            <option>Branch 3</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="examplemobile">Loan Limit</Label>
          <Input
            type="number"
            name="loan"
            id="exampleLoan"
            placeholder="Loan Amount"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}
