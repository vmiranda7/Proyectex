/**
 * Created by VictorMiranda on 02/02/2017.
 *
 * This file is a model of our Subject
 * It is using a ECMAScript 6, The future standard for Javascript
 */

const mongoose = require('mongoose');
const schema = mongoose.Schema;

/* You can use:
* Example: {type: String} o String
*
* If you have to introduce more than one parameter use
* Example:  {type: String, default:0}
*
* */
const SubjectSchema = new schema({
    name: String,
    color: String,
    teacher: String,
    class: String,
    beacon: { type: Number, default: 0 },
    marks:{
        ename: String,
        mark: String,
        percentage: String
    },
    category:{ type: String, enum:['Optativa', 'Obligatoria'] }

});

module.exports = mongoose.model('Subject', SubjectSchema);



