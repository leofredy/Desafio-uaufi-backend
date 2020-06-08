const connection = require('../database/connection')

module.exports = {

    async Update(request, response){

        const spaceWords = /\s{2,}/g
        let { name, email, password, newPassword } = request.body

        name = name.replace(spaceWords, ' ').trim()
        password = password.replace(spaceWords, ' ').trim()
        newPassword = newPassword.replace(spaceWords, ' ').trim()

        if (newPassword){

            const ninja = await connection('ninja')
                .where('email', email)
                .select('name')
                .select('password')
                .first()
            if(ninja.password === password){

                await connection('ninja')
                    .where('email', email)
                    .first()
                    .update({
                        name: name,
                        password: newPassword
                    })
                    return response.status(201).json('Password and name changed successfully')
            }
            else{
                return response.status(401).send()
            }
        }
        else{

            const ninja = await connection('ninja')
                .where('email', email)
                .select('name')
                .select('password')
                .first()
        
            if(ninja.password === password){

                await connection('ninja')
                    .where('email', email)
                    .first()
                    .update({
                        name: name,
                    })
                    return response.status(201).json('Name changed successfully')
            }
            else{
                return response.status(401).send()
            }
        }
        
    }
}