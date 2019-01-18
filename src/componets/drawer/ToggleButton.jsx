import React from 'react'
import { Navbar, NavbarToggler } from 'reactstrap'

const ToggleButton = ({ toggle }) => {
  console.log('check toggle', toggle)
  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler className="mr-2" onClick={toggle} />
      </Navbar>
    </div>
  )
}

export default ToggleButton
