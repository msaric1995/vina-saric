import React, { Component } from "react";
import jwtDecode from 'jwt-decode'

export default class ProizvodUKosarici extends Component {

  constructor() {
    super()

    this.ukloniIzKosaricePrivremeno = () => {
      this.props.ukloniIzKosarice(this.state.idKorisnika, this.props.idProizvoda)
    }

    this.uvecajKolicinu = () => {
      this.props.staviProizvodUKosaricu(this.state.idKorisnika, this.props.idProizvoda)
    }

    this.umanjiKolicinu = () => {
      this.props.umanjiKolicinuProizvoda(this.state.idKorisnika, this.props.idProizvoda)
    }

    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    var idKorisnika = decoded.id
    this.state = {
      idKorisnika: idKorisnika
    }
  }

  render() {
    const { cijena, naziv, kolicina } = this.props;
    return (

      <div className={'proizvod'}>
        <h2 className={'proizvodNaslov'}>{naziv}</h2>
        <h2 className={'proizvodText'}>{cijena} kn</h2>
        <div className="dodaniProizvod">
          <div className="dodaniProizvodMinusPlus">
            <button
              onClick={this.umanjiKolicinu}
              className="buttonMinusPlus">
              -
          </button>
            <h3>{kolicina} </h3>
            <button
              onClick={this.uvecajKolicinu}
              className="buttonMinusPlus">
              +
          </button>
          </div>
          <div>
            <button
              onClick={this.ukloniIzKosaricePrivremeno}
              className="buttonUkloni">
              Ukloni
          </button>
          </div>
        </div>
      </div>)
  }
}