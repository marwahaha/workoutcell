//This document will outline all the server side rest commands and their parameters

//This function will be used for futur scalibility issues. Where collections might become too big for number of users, so it will go threw this
//algorithm to spit out new collection based on user and usergroup


//upload new parcous - POST
var restPost_newParcour = "/parcour/" + authId + "/";
var getParcourList = "/parcour/list/" + authId;
var postworkout = "/workout/" + authId;
var getParcour = "/parcour/";
var postResult = "/result/" + authId; //Followed by :workoutId
var deleteWorkout = "/workout/delete/" + authId;  //followed by /:year/:month/:workoutid/:eventid
var searchFullName = "/search/fullname";  //:first/:last
var getFriendCell = '/cell/friends/' + authId;
var getNotfication = '/notification/queu/' + authId + '/0/10';
var postCell = '/cell/create/' + authId;
var getAllCell = '/cell/all/' + authId;
var postcellworkout = '/workout/cell/';  
var quitWorkout = '/workout/cell/quit/'; //:year/:month/:workoutid/:eventid
var joinWorkoutCell = "/workout/cell/join/";
var joinCell = "/cell/join/";
var quitCell = "/cell/quit/";
var deleteParcour  = "/parcour/delete/";


//Instantiated variables with this function

var initGlobalVar = function(){
    
    postResult = "/result/" + authId;
    restPost_newParcour = "/parcour/" + authId + "/";
    getParcourList = "/parcour/list/" + authId;
    postworkout = "/workout/" + authId;
    getParcour = "/parcour/";
    deleteWorkout = "/workout/delete/" + authId;
    searchFullName = "/search/fullname";
    getFriendCell = '/cell/friends/' + authId;
    getNotfication = '/notification/queu/' + authId + '/0/10';
    postCell = '/cell/create/' + authId;
    getAllCell = '/cell/all/' + authId;
    postcellworkout = '/workout/cell/'; 
    quitWorkout = '/workout/cell/quit/';
    joinWorkoutCell = "/workout/cell/join/";
    joinCell = "/cell/join/";
    quitCell = "/cell/quit/";
    deleteParcour  = "/parcour/delete/";
}