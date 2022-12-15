const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  let a = 1, b = 2
  let c = a + b
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})