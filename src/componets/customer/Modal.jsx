import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './Modal.css'

import AddCustomerForm from './AddCustomerForm'

const RenderForm = ({
  //Props from Customer components to modal
  firstname,
  lastname,
  mobile,
  email,
  branch,
  loanlimit,
  handleInputChange,
  handleSubmit,
  validate,
  handleBlur,
  modal,
  toggle,
  touched
}) => {
  return (
    <div>
      <button className="add-btn" onClick={toggle}>
        Add Customer
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Customer</ModalHeader>
        <ModalBody>
          <AddCustomerForm
            firstname={firstname}
            lastname={lastname}
            mobile={mobile}
            email={email}
            branch={branch}
            loanlimit={loanlimit}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            touched={touched}
            validate={validate}
            handleBlur={handleBlur}
          />
        </ModalBody>
      </Modal>
    </div>
  )
}

export default RenderForm
