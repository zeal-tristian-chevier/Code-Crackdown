const express = require('express')
const cors = require('cors')
const {userRouter} = require('./server/routes/user.routes')
const port = process.env.PORT || 8000

require('./server/config/mongoose.config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/users', userRouter)

if (process.env.NODE_ENV === "production") {
    console.log("PRODUCTION MODE ACTIVE");

    app.use(express.static(path.join(__dirname, "/client/build")))
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build','index.html'));
    })
}

app.listen(port, () => console.log(`Listening on Port: ${port}`))