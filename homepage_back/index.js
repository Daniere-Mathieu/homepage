const express = require('express')
const app = express()
const port = 3000

app.get('/userInformation', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`The API is running at port: ${port}`)
})