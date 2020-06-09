const connection = require('../database/connection')

module.exports = {

    async Delete(request, response){
        const ninja_id = request.headers.authorization

        if(!ninja_id){
            return response.status(401).send()
        }
        const account_ninja = await connection('ninja')
            .where('id', ninja_id)
            .select('*')
            .first()
        if(!account_ninja){
            return response.status(401).send()
        }
        await connection('ninja')
            .where('id', ninja_id)
            .delete()
        return response.status(204).send()
    },
}
