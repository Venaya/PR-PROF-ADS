const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.ATLAS_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(res => console.log('Database Connected'))
        .catch(err => console.error(err.message));

    const connection = mongoose.connection;

    connection.on('error', (err) => {
        console.log('Mongoose connection error ' + err);
    });

    connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
    
    process.on('SIGINT', () => {
        console.log('Mongoose connection disconnected on App Termination');
        process.exit(0);
    });

    connection.once('open', () => {
        console.log('Database connection established successfully');
    });
}
