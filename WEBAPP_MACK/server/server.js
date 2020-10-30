require('dotenv').config();

const connection = require('./src/DB/Connection');
connection();

const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(cors(
    {
        origin: ['http://localhost:3333', 'http://127.0.0.1:3333'],
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('combined'));
app.use(helmet());

const userRouter = require('./src/Routes/UserRoute');
const serviceRouter = require('./src/Routes/ServiceRoute');

app.use('/api/user', userRouter);
app.use('/api/service', serviceRouter);

app.listen(process.env.PORT, () => {
    console.log(`Webserver connected to PORT: ${process.env.PORT}`);
});