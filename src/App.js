import React, { Component } from 'react'
import './App.css'

//components
import Drawer from './componets/drawer/Drawer'
import Main from './componets/main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drawer />
        <Main />
      </div>
    )
  }
}

export default App
