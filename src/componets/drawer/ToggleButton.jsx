import React from 'react'
import { Navbar, NavbarToggler } from 'reactstrap'

const ToggleButton = () => {
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler className="mr-2" />
      </Navbar>
    </div>
  )
}

export default ToggleButton
