const express = require('express')
const PORT = 3057
const routes = require('./routes')
const app = express()
require('../src/database/index')

app.use(express.json())
app.use(routes)
app.listen(PORT, ()=>{
    console.log('Server rodando, port 3057')
})