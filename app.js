const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const mongoose = require('mongoose');
const controller = require('./app/routes/note_routes');
const app = express();


mongoose.connect(db.url, function (err, res) {

    if (err) throw err;


});

app.use(cors())
app.use(bodyParser.json());

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/notes', controller);

app.listen(port, (err) => {
    console.log('We are live on ' + port);
    if (err) {
        throw err
    }
})