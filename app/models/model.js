const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NotesSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    body: { type: String, required: true, max: 100 },
    // id: { type: String, required: false, max: 100 },
});

module.exports = mongoose.model('Note', NotesSchema);