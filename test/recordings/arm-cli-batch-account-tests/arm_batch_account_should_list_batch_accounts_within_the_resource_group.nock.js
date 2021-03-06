// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup4738?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclibatchgroup4738' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '36991577-9de7-44e4-9284-e4cb1361032f',
  'x-ms-correlation-request-id': '36991577-9de7-44e4-9284-e4cb1361032f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043510Z:36991577-9de7-44e4-9284-e4cb1361032f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:35:10 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup4738?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'armclibatchgroup4738' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '36991577-9de7-44e4-9284-e4cb1361032f',
  'x-ms-correlation-request-id': '36991577-9de7-44e4-9284-e4cb1361032f',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043510Z:36991577-9de7-44e4-9284-e4cb1361032f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:35:10 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup4738?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup4738\",\"name\":\"armclibatchgroup4738\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '65540a9f-aa4d-442f-adca-a24302278851',
  'x-ms-correlation-request-id': '65540a9f-aa4d-442f-adca-a24302278851',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043512Z:65540a9f-aa4d-442f-adca-a24302278851',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:35:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourcegroups/armclibatchgroup4738?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup4738\",\"name\":\"armclibatchgroup4738\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '65540a9f-aa4d-442f-adca-a24302278851',
  'x-ms-correlation-request-id': '65540a9f-aa4d-442f-adca-a24302278851',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043512Z:65540a9f-aa4d-442f-adca-a24302278851',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:35:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '418',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '3a622f45-0e96-41d4-9793-ae43ed3cc1a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'da34b121-475e-4294-aa79-0cbaa61ccf12',
  'x-ms-correlation-request-id': 'da34b121-475e-4294-aa79-0cbaa61ccf12',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043514Z:da34b121-475e-4294-aa79-0cbaa61ccf12',
  date: 'Thu, 24 Mar 2016 04:35:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[{\"name\":\"armclibatch9511\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch9511.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20},\"id\":\"/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup9528/providers/Microsoft.Batch/batchAccounts/armclibatch9511\",\"type\":\"Microsoft.Batch/batchAccounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '418',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': '3a622f45-0e96-41d4-9793-ae43ed3cc1a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': 'da34b121-475e-4294-aa79-0cbaa61ccf12',
  'x-ms-correlation-request-id': 'da34b121-475e-4294-aa79-0cbaa61ccf12',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043514Z:da34b121-475e-4294-aa79-0cbaa61ccf12',
  date: 'Thu, 24 Mar 2016 04:35:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup4738/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '091910e7-bf5d-4ba2-bec9-87af05084ffd',
  'x-ms-correlation-request-id': '091910e7-bf5d-4ba2-bec9-87af05084ffd',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043515Z:091910e7-bf5d-4ba2-bec9-87af05084ffd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:35:14 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup4738/providers/Microsoft.Batch/batchAccounts?api-version=2015-12-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '091910e7-bf5d-4ba2-bec9-87af05084ffd',
  'x-ms-correlation-request-id': '091910e7-bf5d-4ba2-bec9-87af05084ffd',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160324T043515Z:091910e7-bf5d-4ba2-bec9-87af05084ffd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 24 Mar 2016 04:35:14 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclibatchgroup4738'];};