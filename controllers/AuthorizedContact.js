'use strict';

var utils = require('../utils/writer.js');
var AuthorizedContact = require('../service/AuthorizedContactService');

module.exports.addAuthorizedContact = function addAuthorizedContact (req, res, next, body, xCorrelationId) {
  AuthorizedContact.addAuthorizedContact(body, xCorrelationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAuthorizedContact = function deleteAuthorizedContact (req, res, next, body, xCorrelationId) {
  AuthorizedContact.deleteAuthorizedContact(body, xCorrelationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
