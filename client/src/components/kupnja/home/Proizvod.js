import React, { Component } from 'react'
// import '../../styles/Proizvod.css'

import jwtDecode from 'jwt-decode'
class Proizvod extends Component {
  constructor() {
    super()
    
    this.staviPrivremenoUkosaricu = () => {
      this.props.staviProizvodUKosaricu(this.state.idKorisnika, this.props.idProizvoda)
    }

    //ako je korisnik logiran moze dodat u kosaricu ako nije nemoze
    const token = localStorage.usertoken
    if (!token) {
      this.state = {
        className: "button"
      }
    }else{
      const decoded = jwtDecode(token)
      this.state = {
        className: "buttonVisible",
        idKorisnika: decoded.id
      }
    }
  }


  render() {
    const { cijena, naziv, opis, slika, } = this.props;

    return (
      <div className={'proizvod'}>
        <div className={'proizvodTop'}>
          <h2 className={'proizvodNaslov'}>{naziv}</h2>
          <h2 className={'proizvodText'}>{cijena} kn</h2>
          <button
            onClick={this.staviPrivremenoUkosaricu}
            className={this.state.className}>
            Dodaj u košaricu
          </button>
        </div>

        <div className={'detaljiProizvoda'}>
          < img className={'imagee'} src={_imageEncode(slika.data)} alt="Logo" />
          <div><p >{opis}</p></div>
        </div>
      </div>)
  }
}


//za prikaz slike iz baze
function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};

function _imageEncode(arrayBuffer) {
  var base64Flag = 'data:image/jpeg;base64,';
  var imageStr = arrayBufferToBase64(arrayBuffer);
  return base64Flag + imageStr
}

export default Proizvod

