'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.artistsGET = function artistsGET (req, res, next, limit, offset) {
  Default.artistsGET(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsPOST = function artistsPOST (req, res, next, body) {
  Default.artistsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.artistsUsernameGET = function artistsUsernameGET (req, res, next, username) {
  Default.artistsUsernameGET(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
