import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  showContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  showLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  showRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.showContent,
          onToggleShowLeftNavbar: this.showLeftNavbar,
          onToggleShowRightNavbar: this.showRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
