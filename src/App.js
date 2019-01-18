import React, { Component } from 'react'
import './App.css'

//components
import Drawer from './componets/drawer/Drawer'
import Main from './componets/main/Main'

class App extends Component {
  state = {
    collapsed: true
  }

  toggleDrawer = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div className="App">
        <Drawer isOpen={this.state.collapsed} />
        <Main toggle={this.toggleDrawer} />
      </div>
    )
  }
}

export default App
