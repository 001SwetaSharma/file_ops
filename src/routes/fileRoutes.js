import express from 'express';
import fileController from '../controllers/fileController.js';
const fileRoutes = express.Router();

fileRoutes.get('/read', fileController.fileRead);
fileRoutes.post('/update', fileController.fileUpdate);

export default fileRoutes;