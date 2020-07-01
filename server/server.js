var express = require("express")
var cors =require("cors")
var bodyParser = require("body-parser")
const app = express();

var port = process.env.PORT || 5000;
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

var Korisnik = require('./route/KorisnikRoute')
var Proizvod = require('./route/ProizvodRoute')
var Kupnja = require('./route/KupnjaRoute')

app.use('/korisnik', Korisnik)
app.use('/proizvod', Proizvod)
app.use('/kupnja', Kupnja)


var Vina = require('./route/VinaRoute')
app.use('/vina', Vina)

app.listen(port, ()=> {
 console.log("Server listening on port: " + port)
})
