'use strict';


/**
 * Returns a list of artists
 *
 * limit Integer Limits the number of items on a page (optional)
 * offset Integer Specifies the page number of the artists to be displayed (optional)
 * returns List
 **/
exports.artistsGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "artist_name" : "artist_name",
  "albums_recorded" : 0,
  "artist_genre" : "artist_genre",
  "username" : "username"
}, {
  "artist_name" : "artist_name",
  "albums_recorded" : 0,
  "artist_genre" : "artist_genre",
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Let's a user post a new artist
 *
 * body Artist 
 * no response value expected for this operation
 **/
exports.artistsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtain information about an artist from his or her unique username
 *
 * username String 
 * returns inline_response_200
 **/
exports.artistsUsernameGET = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "artist_name" : "artist_name",
  "albums_recorded" : 0,
  "artist_genre" : "artist_genre"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

