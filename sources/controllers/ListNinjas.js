const connection = require('../database/connection')

module.exports = {
    async Listagem(request, response){
        const ninjas = await connection('ninja').select('name').select('email')
        return response.json(ninjas)
    },
    async Total(request, response){
        const [ count ] = await connection('ninja').select('*').count()
        response.json(count['count(*)'])
        response.status(201).send()
    }
}