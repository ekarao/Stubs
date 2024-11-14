'use strict';


/**
 * Get Customer and Authorized contact details
 * Get Customer and Authorized contact details
 *
 * customerId String Salesforce customer id that needs to be retrieved
 * xCorrelationId String Correlation Id of the message (optional)
 * returns Customer
 **/
exports.getManagePreference = function(customerId,xCorrelationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contactMedium" : {
    "emailAddress" : "john.doe@gmail.com",
    "phoneNumber" : "+61412345678",
    "mailingAddress" : "699 BOURKE STREET, DOCKLANDS, VIC 3006"
  },
  "individual" : {
    "firstName" : "John",
    "lastName" : "Doe"
  },
  "authorizedContact" : [ {
    "firstName" : "Jane",
    "lastName" : "Doe",
    "phoneNumber" : "+61412345678",
    "customerId" : "010000102"
  }, {
    "firstName" : "Jane",
    "lastName" : "Doe",
    "phoneNumber" : "+61412345678",
    "customerId" : "010000102"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

