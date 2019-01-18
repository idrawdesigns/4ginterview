import React from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class Branch extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
        <DropdownToggle caret outline>
          Branches
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Branch 1</DropdownItem>
          <DropdownItem>Branch 2</DropdownItem>
          <DropdownItem>Branch 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
