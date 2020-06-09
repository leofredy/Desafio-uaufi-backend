const connection = require('../database/connection')

module.exports = {

    async Update(request, response){

        const spaceWords = /\s{2,}/g
        let { name, email, password, newpassword } = request.body
        console.log(name, email, password, newpassword)
/*
        name = name.replace(spaceWords, ' ').trim()
        password = password.replace(spaceWords, ' ').trim()
        newpassword = newpassword.replace(spaceWords, ' ').trim()
*/
        if (newpassword){

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
                        password: newpassword
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