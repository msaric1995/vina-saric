import React, { Component } from 'react'
import { registracija } from './ShopManager'

class Registracija extends Component {
  constructor() {
    super()
    this.state = {
      ime: '',
      prezime: '',
      email: '',
      lozinka: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const noviKorisnik = {
      ime: this.state.ime,
      prezime: this.state.prezime,
      email: this.state.email,
      lozinka: this.state.lozinka
    }

    registracija(noviKorisnik).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Registracija</h1>
              <div className="form-group">
                <label htmlFor="name">Ime</label>
                <input
                  type="text"
                  className="form-control"
                  name="ime"
                  placeholder="Unesite ime"
                  value={this.state.ime}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Prezime</label>
                <input
                  type="text"
                  className="form-control"
                  name="prezime"
                  placeholder="Unesite prezime"
                  value={this.state.prezime}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email adresa</label>
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
                <label htmlFor="lozinka">Lozinka</label>
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
                Registriraj se!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Registracija