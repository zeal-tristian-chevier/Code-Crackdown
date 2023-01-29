const mongoose = require('mongoose')
const dbName = 'codecrackdown_db'

mongoose.connect(`mongodb+srv://crackdownadmin:UOhXrVGwU7LrWY00@cluster1.u4ryb7f.mongodb.net/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
