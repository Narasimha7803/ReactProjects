const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('post Hello World!')
  })

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`)
})