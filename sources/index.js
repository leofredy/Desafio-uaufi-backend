const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')

app.use(cors({ origin: 'https://front-desafio-uaufi.herokuapp.com/' }))

app.use(express.json())
app.use(routes)
app.listen(3333)