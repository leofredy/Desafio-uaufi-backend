const connection = require('../database/connection')

module.exports = {

    async Login(request, response){
        const { email, password } = request.body
        const ninja = await connection('ninja')
            .where('email', email)
            .where('password', password)
            .first()
        if(!ninja){
            response.status(401).send()
        }

        response.json({id: ninja.id, name: ninja.name, email: ninja.email})
    },
}