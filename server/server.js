const express = require('express')
const cors = require('cors')
const {userRouter} = require('./routes/user.routes')
const port = process.env.PORT || 8000

require('./config/mongoose.config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/users', userRouter)

app.listen(port, () => console.log(`Listening on Port: ${port}`))