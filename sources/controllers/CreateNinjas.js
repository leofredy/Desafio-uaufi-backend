const connection = require('../database/connection')

module.exports = {
    
    async Create(request, response){

        const spaceWords = /\s{2,}/g
        const emailValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        let { name, email, password } = request.body
        name = name.replace(spaceWords, ' ').trim()
        email = email.replace(spaceWords, ' ').trim()
        password = password.replace(spaceWords, ' ').trim()

        if(!name || !email || !password){
            return response.status(401).json({ error: 'Fill in all fields' })
        }
        else if(name === ' ' || email === ' ' || password === ' '){
            return response.status(401).json({ error: 'Invalid credentials.' })
        }
        if(!emailValid.test(email)){
            return response.status(401).json({ error: 'Invalid email' })
        }

        const ninja = await connection('ninja')
            .where('email', email)
            .select('*')
            .first()

        if(!ninja){

            await connection('ninja').insert({
                name,
                email,
                password
            })

            return response.status(204).send()
        }

        return response.status(401).json({ error: 'E-mail already registered.' })
    },
}