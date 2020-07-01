import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Registracija from './components/Registracija'
import Profil from './components/profil/Profil'
import Kosarica from './components/kupnja/kosarica/Kosarica'
import Home from './components/kupnja/home/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/registracija" component={Registracija} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profil} />
            <Route exact path="/kosarica" component={Kosarica} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App