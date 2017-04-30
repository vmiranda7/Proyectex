/**
 * Created by VictorMiranda on 02/02/2017.
 *
 * This file contains the routes from Subjects
 * It is using a ECMAScript 6, The future standard for Javascript
 */

const express = require('express');
const subjectCtrl = require ('../controllers/subject');
const auth = require('../middlewares/auth');
const api = express.Router();


api.get('/subjects', auth, subjectCtrl.getSubjects);
api.get('/subject/:subject_Id', auth,subjectCtrl.getSubject);
api.post('/subject',auth, subjectCtrl.createSubject);
api.put('/subject/:subject_Id', auth, subjectCtrl.updateSubjects);
api.delete('/subject/:subject_Id',auth, subjectCtrl.deleteSubject);


module.exports = api;

