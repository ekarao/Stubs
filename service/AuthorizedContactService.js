'use strict';


/**
 * Add Authorized Contact
 * Add Authorized contact
 *
 * body Add_AuthorizedContact_Request 
 * xCorrelationId String Correlation Id of the message
 * returns Add_AuthorizedContact_Response
 **/
exports.addAuthorizedContact = function(body,xCorrelationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Successful",
  "status" : "201"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Authorized contact relationship
 * Delete Authorized contact relationship
 *
 * body Delete_AuthorizedContact_Request Delete Authorized Contact
 * xCorrelationId String Correlation Id of the message
 * returns Delete_AuthorizedContact_Response
 **/
exports.deleteAuthorizedContact = function(body,xCorrelationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Successful",
  "status" : 200
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

