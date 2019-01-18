import React from 'react'
import './Header.css'
import ToggleButton from '../drawer/ToggleButton'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="_nav-items">
        <div className="toggle-button">
          <ToggleButton />
        </div>
        <div className="countries">
          <p>KENYA</p> <p>UGANDA</p>
        </div>
      </div>
      <div className="spacer" />
      <div className="user-wrapper">
        <div className="profile-info">
          <p>
            Welcom Brannet!
            <br />
            <span>Logout</span>
          </p>
        </div>
        <div className="image">
          <img src={require('../../Assets/avatar.jpeg')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
