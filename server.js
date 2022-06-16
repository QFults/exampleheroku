const express = require('express')
const { join } = require('path')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(join(__dirname, 'public')))

app.listen(PORT)
