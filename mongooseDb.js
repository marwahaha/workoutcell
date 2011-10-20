var mongoDbAdress = '24.202.230.241:27017';
var mongoDbName = 'workoutcellDb';

var mongoose = require('./node_modules/mongoose');
var everyauth= require('everyauth');
var Promise = everyauth.Promise;
mongoose.connect('mongodb://' + mongoDbAdress + '/' + mongoDbName);

Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

//************************SOCIAL SCHEMAS **************************

var User = new Schema({
//id is the facebook id, intrinsincly unique
    fbid       : Number,
    firstName  : String,   
    lastName   : String,
    email      : String,
    joinDate   : {type: Date, default: Date.now}
});


//The general reference is a collection where each document contains 
//the objectid reference for the users parcours, coaches and friends
var GeneralReference = new Schema({
    
    id           : Number,
    friends      : [PersonnaReference],
    coaches      : [PersonnaReference],
    parcours     : [ParcourReference]
        
});

var PersonnaReference = new Schema({
   
   realId:   Number,
   name:   String
   
});

//*****************MAPPING APP SCHEMAS *************************

var ParcourReference = new Schema({
   //ref to Parcour which has the content
   realId      : ObjectId,
   name        : String,
   distance    : Number
    
});

// content is the parcour data from google map
//Currently no point in transforming the json in an actual object
var Parcour = new Schema({
   
   content    : String,
   distance   : Number,
   name       : String
    
});



//************* SCHEMA FOR WORKOUTS **********************

//Calendar event Reference collection
//Sorted out by months
var CalendarEventReference = new Schema({
    
   id   : Number,  //Users FBid 
   ref  : [CalendarMonth]  
    
    
});

var CalendarMonth = new Schema({
 
 id          : Number, //String consisting of Year and Month ex:1112 = 2011 Dec
 allEvents   : [CalendarEvent]
   
});

//An event is jcalendar compatible and reference a full workout
/*
 IETF format (ex: "Wed, 18 Oct 2009 13:00:00 EST"), a string in ISO8601 format (ex: "2009-11-05T13:15:30Z") or a UNIX timestamp.
*/
var CalendarEvent = new Schema({
   //id         : Number,
   title      : String,
   allDay     : Boolean,
   start      : Date,
   end        : Date,
   url        : String,
   color      : String,
   refWorkout : ObjectId
    
});

//Create models out of schema
mongoose.model('User', User);
mongoose.model('GeneralReference', GeneralReference);   
mongoose.model('PersonnaReference', PersonnaReference);

mongoose.model('ParcourReference', ParcourReference);
mongoose.model('Parcour', Parcour);

 
mongoose.model('CalendarEventReference', CalendarEventReference);  
mongoose.model('CalendarMonth', CalendarMonth);  
mongoose.model('CalendarEvent', CalendarEvent);  


//Export models

var User = exports.User = mongoose.model('User');
var GeneralReference = exports.GeneralReference = mongoose.model('GeneralReference');

var PersonnaReference = exports.PersonnaReference = mongoose.model('PersonnaReference');
var ParcourReference = exports.ParcourReference = mongoose.model('ParcourReference');
var Parcour = exports.Parcour = mongoose.model('Parcour');

var CalendarEventReference = exports.CalendarEventReference = mongoose.model('CalendarEventReference');
var CalendarMonth = exports.CalendarMonth = mongoose.model('CalendarMonth');
var CalendarEvent = exports.CalendarEvent = mongoose.model('CalendarEvent');