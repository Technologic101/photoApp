"use strict";
var express = require("express");
var db_1 = require("../db");
"";
var mongodb = require("mongodb");
var router = express.Router();
router.get('/:id', function (req, res) {
    var photoId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('photos').findOne(photoId).then(function (photo) {
        res.json(photo);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('photos').find().toArray().then(function (photos) {
        res.json(photos);
    });
});
router.post('/', function (req, res) {
    var photo = req.body;
    photo._id = new mongodb.ObjectID(photo.id);
    db_1.default.db.collection('photos').save(photo).then(function (newphoto) {
        res.json(newphoto);
    });
});
router.delete('/:id', function (req, res) {
    var photoId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('photos').remove({ _id: photoId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
