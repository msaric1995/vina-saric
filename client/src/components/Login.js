import React, { Component } from 'react'
import { login } from './ShopManager'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      lozinka: '',
      errors: {},
      lista:[]
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const korisnik = {
      email: this.state.email,
      lozinka: this.state.lozinka
    }

    login(korisnik).then(res => {
      if (res) {
        this.props.history.push('/profile')
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Unesite podatke</h1>
              <div className="form-group">
                <label htmlFor="email">Email addresa</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Unesite email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Lozinka</label>
                <input
                  type="password"
                  className="form-control"
                  name="lozinka"
                  placeholder="Lozinka"
                  value={this.state.lozinka}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-secondary btn-block"
              >
                Prijava
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login