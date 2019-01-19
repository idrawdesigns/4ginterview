import React, { Component } from 'react'
import './Modal.css'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap'

class AddCustomerForm extends Component {
  state = {
    modal: false,
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    branch: '',
    loanlimit: '',
    touched: {
      firstname: false,
      lastname: false,
      mobile: false,
      email: false,
      branch: false
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  validate = (firstname, lastname, mobile, email) => {
    const errors = {
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
      branch: ''
    }

    if (this.state.touched.firstname && firstname.length < 4)
      errors.firstname = 'First Name is required'
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = 'First Name should be <= 10 characters'

    if (this.state.touched.lastname && lastname.length < 4)
      errors.lastname = 'Last Name is required '
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = 'Last Name should be <= 10 characters'

    const reg = /^\d{10}$/
    if (this.state.touched.mobile && !reg.test(mobile))
      errors.mobile = 'Hey! Mobile number should contain 10 digits'

    if (
      this.state.touched.email &&
      email.split('').filter(x => x === '@').length !== 1
    )
      errors.email = 'Invalid Email'

    return errors
  }

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    })
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addCustomer(this.state)
  }

  render() {
    const {
      firstname,
      lastname,
      mobile,
      email,
      branch,
      loanlimit,
      modal
    } = this.state
    const errors = this.validate(firstname, lastname, mobile, email)

    return (
      <div>
        <button className="add-btn" onClick={this.toggle}>
          Add Customer
        </button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Customer</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label Htmlfor="First name">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={firstname}
                  invalid={errors.firstname !== ''}
                  onBlur={this.handleBlur('firstname')}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.firstname}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="Last name">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="last"
                  placeholder="Last Name"
                  value={lastname}
                  invalid={errors.lastname !== ''}
                  onBlur={this.handleBlur('lastname')}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.lastname}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="example@mail.com"
                  value={email}
                  invalid={errors.email !== ''}
                  onBlur={this.handleBlur('email')}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormFeedback>{errors.email}</FormFeedback>
              <FormGroup>
                <Label for="examplemobile">Mobile Number</Label>
                <Input
                  type="tel"
                  name="mobile"
                  id="examplePassword"
                  placeholder="07XXXXXXXX"
                  value={mobile}
                  invalid={errors.mobile !== ''}
                  onBlur={this.handleBlur('mobile')}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.mobile}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input
                  type="select"
                  name="branch"
                  id="exampleSelect"
                  value={branch}
                  invalid={errors.branch !== ''}
                  onBlur={this.handleBlur('branch')}
                  onChange={this.handleInputChange}
                >
                  <option>Branch 1</option>
                  <option>Branch 2</option>
                  <option>Branch 3</option>
                </Input>
                <FormFeedback>{errors.branch}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="examplemobile">Loan Limit</Label>
                <Input
                  type="number"
                  name="loanlimit"
                  id="exampleLoan"
                  placeholder="Loan Amount"
                  value={loanlimit}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default AddCustomerForm
