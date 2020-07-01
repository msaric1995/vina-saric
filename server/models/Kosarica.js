const Sequelize = require('sequelize')
const db = require('../database/db.js')

var Kosarica = db.sequelize.define(
  'kosarica',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idKorisnika: {
      type: Sequelize.INTEGER,
    },
    idProizvoda: {
      type: Sequelize.INTEGER,
    },
    kolicina: {
      type: Sequelize.INTEGER
    },
    kupljeno: {
      type: Sequelize.INTEGER
    },
    datumKupnje: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  },
)

module.exports = Kosarica