const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const promise = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cyber', {
    useMongoClient: true
});