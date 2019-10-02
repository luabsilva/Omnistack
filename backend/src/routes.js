const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotsController = require('./controllers/SpotsController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SessionController.store);


module.exports = routes;