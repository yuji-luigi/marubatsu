const express = requre('express')
const path = require('path')
const app = express()

app.use(express.static(path(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`))