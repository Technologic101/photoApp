import * as express from 'express';
import database from '../db';``
import * as mongodb from 'mongodb';

let router = express.Router();

// GET single photo
router.get('/:id', (req, res) => {
  let photoId = new mongodb.ObjectID(req.query['id']);
  database.db.collection('photos').findOne(photoId).then((photo)=> {
    console.log('Photo:' + photo);
    res.json(photo);
  });
});

// GET photos
router.get('/', (req, res) => {
  database.db.collection('photos').find().toArray().then((photos)=>{
    console.log("From Router: " + photos);
    res.json(photos);
  })
});

// Create/Update photo
router.post('/', (req, res) => {
  let photo = req.body;
  photo._id = new mongodb.ObjectID(photo.id); // convert _id to object
  database.db.collection('photos').save(photo).then((newphoto) => {
    res.json(newphoto);
  })
});

router.delete('/', (req, res) => {
  let photoId = new mongodb.ObjectID(req.query['id']);
  console.log('router delete called');
  database.db.collection('photos').remove({_id:photoId}).then(()=> {
    res.sendStatus(200);
  });
});

export default router;
