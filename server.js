import express from 'express'
const port = 4554
const app = express()
app.use(express.static('dist'))
app.listen(port, () =>{
  console.log(`Server listening on port ${port}`)
})