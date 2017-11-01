/**
 * Created by kate on 10/23/17.
 */

var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
    useMongoClient: true
});


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



//DEFINE SCHEMA

// Define schema

var Schema = mongoose.Schema;

var EventsSchema = new Schema({
    added_by_user_id:  {type: Schema.Types.ObjectId, ref: 'User'},
    event_name:String,
    a_date: Date,
    desrciption: String
});


var UserSchema = new Schema({
    user_id:  {type: Schema.Types.ObjectId},
    nickname: String,
    first_name: {type:String, reaquired:true},
    last_name: {type:String, reaquired:true},
    user_password:{type:String, reaquired:true},
    user_rights:{type:String, reaquired:true},
    date_registered: {type:Date, default: Date.now},
    email: {type:String, reaquired:true}
});

var CrewSchema = new Schema({
    added_by_user_id:  {type: Schema.Types.ObjectId, ref: 'User'},
    name:String,
    description: String,
});

// Compile model from schema
var User = mongoose.model('Users', UserSchema );


// Compile model from schema
var Event = mongoose.model('Events', EventsSchema );

var Crew = mongoose.model('Crew', CrewSchema);

let database = {User, Event, Crew}
export default database;