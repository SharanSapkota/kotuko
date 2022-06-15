const express   = require('express');
const app       = express()
const endPoints = require('./routes/index.ts')
const dotenv    = require('dotenv').config({ path: '../.env' }); 

app.use(endPoints)
app.use(express.json())

const port      = process.env.PORT || 4200;

app.listen( port, () => {
    console.log(`Server started on port ${port}`)
})