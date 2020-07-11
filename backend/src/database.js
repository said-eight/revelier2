const mongoose = require('mongoose');

const URI = process.env.MONGO_URI || 'mongodb://localhost:27017/databasetest'  ;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
     useUnifiedTopology: true
}
);

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('Db is connected', URI)
});