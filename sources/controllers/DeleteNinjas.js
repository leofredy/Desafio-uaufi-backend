const connection = require('../database/connection')

module.exports = {

    async Delete(request, response){
        const ninja_id = request.headers.authorization
        const { password } = request.body

        const account_ninja = await connection('ninja')
            .where('id', ninja_id)
            .where('password', password)
            .select('*')
            .first()
        if(!account_ninja){
            return response.status(401).send()
        }
        await connection('ninja')
            .where('id', ninja_id)
            .where('password', password)
            .delete()
        return response.status(204).send()
    }
}
