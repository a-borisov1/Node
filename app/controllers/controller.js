const Note = require('../models/model');
const ObjectID = require('mongodb').ObjectID;
exports.info = function (req, res) {
    Note.find(function (err, note) {
        if (err) return err;
        res.send(note);
    })
}


exports.create = function (req, res) {
    const note = new Note(
        {
            title: req.body.title,
            body: req.body.body
        }
    );

    note.save(function (err, val) {
        if (err) {
            return err;
        }

        res.send(val)
    })
};


exports.details = function (req, res) {
    Note.findById(req.params.id, function (err, note) {
        if (err) return err;
        res.send(note);
    })
};


exports.update = function (req, res) {
    Note.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return err;
        res.send('Product udpated.');
    });
};


exports.delete = function (req, res) {
    Note.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};


exports.delete_all = function (req, res) {
    Note.find(function (err, result) {
        if (err) return err;
        Note.remove({ id: req.body.id }, function (err, result) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    })
};