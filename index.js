const express = require('express')
const cors = require('cors')
const routes = require('./routes/approutes')

const app = express()
app.use(cors())
app.use('/api',routes)

app.listen(3001)