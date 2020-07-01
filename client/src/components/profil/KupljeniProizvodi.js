import React, { Component } from 'react'
import '../../styles/Proizvod.css'

class KupljeniProizvodi extends Component {

  render() {
    const { cijena, naziv, datumKupnje, kolicina, } = this.props;
    return (
      <div className={'proizvod'}>
          <h2 className={'proizvodNaslov'}>{naziv}</h2>
          <h2 className={'proizvodText'}>{cijena} kn</h2>
          <h2 className={'proizvodText'}>Kupljeno: {datumKupnje}</h2>
          <h2 className={'proizvodText'}>Komada: {kolicina}</h2>
      </div>
      )}
}

export default  KupljeniProizvodi