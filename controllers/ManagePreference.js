'use strict';

var utils = require('../utils/writer.js');
var ManagePreference = require('../service/ManagePreferenceService');

module.exports.getManagePreference = function getManagePreference (req, res, next, customerId, xCorrelationId) {
  ManagePreference.getManagePreference(customerId, xCorrelationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
