const express = require('express')
const app = express()
const port = 3000

// Add support for serving static files
app.use('/app', express.static('app'))

// Add Hello World
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening2   on port ${port}`)
})