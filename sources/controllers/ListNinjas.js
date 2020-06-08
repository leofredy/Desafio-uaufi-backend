const connection = require('../database/connection')

module.exports = {
    async Listagem(request, response){
        const [ count ] = await connection('ninja').count()
        const ninjas = await connection('ninja').select('*')
        
        response.header('X-Count', count['count(*)'])
        return response.json(ninjas)
    },
}