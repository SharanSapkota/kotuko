const express   = require('express');
const app       = express()
const endPoints = require('./routes/getRequest.ts')
const dotenv    = require('dotenv').config({ path: '../.env' }); 

app.use(endPoints)
app.use(express.json())
console.log(dotenv)
const port = process.env.PORT

app.listen(port || 4200, () => {
    console.log(`Server started on port ${port}`)
})