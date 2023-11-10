const { Router } = require('express')
const router = Router()
const User = require('../models/User')

router.get('/', (req, res)=>{
    res.send('Hello World')
})

router.post('/criar', async (req, res) =>{
    const { nome, email } = req.body
    try {
   const newUser = await User.create({nome, email});
   res.json(newUser)
   console.log(newUser);
    } catch (error) {
   console.error('Erro ao criar o usuário:', error.message);
    }

})

module.exports =  router