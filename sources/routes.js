const express = require('express')
const routes = express.Router()

const SessionNinjas = require('./controllers/SessionNinjas')
const CreateNinjas = require('./controllers/CreateNinjas')
const ListNinjas = require('./controllers/ListNinjas')
const DeleteNinjas = require('./controllers/DeleteNinjas')
const UpdateNinja = require('./controllers/UpdateNinjas')

routes.get('/profile', ListNinjas.Listagem)
routes.get('/count', ListNinjas.Total)
routes.post('/create', CreateNinjas.Create)
routes.delete('/delete', DeleteNinjas.Delete)
routes.post('/', SessionNinjas.Login)
routes.put('/user', UpdateNinja.Update)

module.exports = routes