require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const http = require('http');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)));
app.use(cors());

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT, () => {
    console.log(`Connected to server on PORT ${process.env.PORT}`);
})