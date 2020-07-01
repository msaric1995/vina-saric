const Sequelize = require('sequelize')
const db = require('../database/db.js')

var Proizvod = db.sequelize.define(
  'proizvod',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cijena: {
      type: Sequelize.STRING
    },
    naziv: {
      type: Sequelize.STRING
    },
    opis: {
      type: Sequelize.STRING
    },
    slika: {
      type: Sequelize.STRING
    },
    filter: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
)

module.exports = Proizvod
