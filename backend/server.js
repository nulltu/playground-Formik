const express = require('express')
require('dotenv').config()
const cors = require('cors')
require('./config/db')
const app = express()
const router = require('./routes/routes')

const port = process.env.PORT
host = process.env.HOST || '0.0.0.0'

app.use(cors())
app.use(express.json())
app.use('/api', router)


app.listen(port, host, ()=> console.log("server listening on port" + port))