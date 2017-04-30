/**
 * Created by VictorMiranda on 02/02/2017.
 *
 * This file contains the CRUD from Subject
 * It is using a ECMAScript 6, The future standard for Javascript
 */

const Subject = require('../models/subject/SchemaSubject');

function getSubjects(req,res) {
    Subject.find({}, function (err, subjects) {
        if(err){
            console.log(`ERROR: Petitions doesn't do: ${err}`);
            return res.status(500).send({message: `ERROR: Petitions doesn't do: ${err}`});
        }
        if(!subjects){
            return res.status(404).send({message: 'ERROR: Subjects does not exist'});
        }
        else{
            res.status(200).send({subjects});
        }
    })
}

function getSubject(req, res){
    let subject_Id = req.params.subject_Id;
    Subject.findById(subject_Id, function (err, subject){
        if(err) {
            console.log(`ERROR: Petitions doesn't do: ${err}`);
            return res.status(500).send({message: `ERROR: Petitions doesn't do: ${err}`});
        }
        if(!subject){
            return res.status(404).send({message: 'ERROR: Subject does not exist'});
        }
        else {
            res.status(200).send({subject: subject});
        }
    })
}


function createSubject(req, res) {
    console.log('POST /api/subject');
    console.log(req.body);
    let subject = new Subject({
        name: req.body.name,
        color: req.body.color,
        teacher: req.body.teacher,
        class: req.body.class,
        category: req.body.category
    });
    subject.save(function (err, SubjectStored) {
        if(err) {
            console.log(`ERROR: Not saved in Database: ${err}`);
            res.status(500).send({message: `ERROR: Not saved in Database: ${err}`});
        }
        else {
            console.log('Stored');
            res.status(200).send({subject: SubjectStored});
        }
    })
}

function updateSubjects(req, res){
    let subject_Id = req.params.subject_Id;
    let update= req.body;
    console.log(req.body);
    Subject.findByIdAndUpdate(subject_Id, update, {new: true}, function(err, productUpdate){
        if(err) {
            console.log(`ERROR: Petitions doesn't do: ${err}`);
            return res.status(500).send({message: `ERROR: Petitions doesn't do: ${err}`});
        }
        else {
            console.log(productUpdate);
            res.status(200).send({subject: productUpdate});
        }
    })
}

function deleteSubject(req, res){
    let subject_Id = req.params.subject_Id;
    Subject.findById(subject_Id, function(err, subject){
        if(err) {
            console.log(`ERROR: Petitions doesn't do: ${err}`);
            return res.status(500).send({message: `ERROR: Petitions doesn't do: ${err}`});
        }
        else {
            subject.remove(function(err) {
                if(err){
                    return res.status(500).send({message: `ERROR: Error deleting the subject: ${err}`});
                }
                else{
                    res.status(200).send({message: "The subject has been deleted"});
                }
            })
        }
    })
}

module.exports = {
    getSubjects,
    getSubject,
    createSubject,
    updateSubjects,
    deleteSubject
};