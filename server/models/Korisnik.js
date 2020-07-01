const Sequelize = require('sequelize')
const db = require('../database/db.js')

var Korisnik = db.sequelize.define(
  'korisnik',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ime: {
      type: Sequelize.STRING
    },
    prezime: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    lozinka: {
      type: Sequelize.STRING
    },
    datum: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
)

module.exports = Korisnik
