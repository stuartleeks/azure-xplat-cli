// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"fbf2a420-7a7e-4903-8902-a9649948802f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0024822d-112c-45d2-b63c-226ed805e54e\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [\r\n      {\r\n        \"name\": \"test-subnet\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n        \"etag\": \"W/\\\"fbf2a420-7a7e-4903-8902-a9649948802f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"10.0.0.0/24\",\r\n          \"networkSecurityGroup\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/test-nsg\"\r\n          },\r\n          \"routeTable\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/test-route-table\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1435',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fbf2a420-7a7e-4903-8902-a9649948802f"',
  'x-ms-request-id': 'a6c3e01d-e40c-47de-baba-6bfe19cb95b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7e443d00-5423-4892-8548-1f15b92a3162',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115544Z:7e443d00-5423-4892-8548-1f15b92a3162',
  date: 'Fri, 25 Mar 2016 11:55:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"fbf2a420-7a7e-4903-8902-a9649948802f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0024822d-112c-45d2-b63c-226ed805e54e\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": [\r\n      {\r\n        \"name\": \"test-subnet\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n        \"etag\": \"W/\\\"fbf2a420-7a7e-4903-8902-a9649948802f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"10.0.0.0/24\",\r\n          \"networkSecurityGroup\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/test-nsg\"\r\n          },\r\n          \"routeTable\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/test-route-table\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1435',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fbf2a420-7a7e-4903-8902-a9649948802f"',
  'x-ms-request-id': 'a6c3e01d-e40c-47de-baba-6bfe19cb95b0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7e443d00-5423-4892-8548-1f15b92a3162',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115544Z:7e443d00-5423-4892-8548-1f15b92a3162',
  date: 'Fri, 25 Mar 2016 11:55:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"fbf2a420-7a7e-4903-8902-a9649948802f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/test-nsg\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/test-route-table\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '741',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fbf2a420-7a7e-4903-8902-a9649948802f"',
  'x-ms-request-id': 'd4920d2d-fde8-4683-94bb-ec0b5d9c4366',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9ff82a24-8c45-48a7-8471-2ab1e372ad3a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115545Z:9ff82a24-8c45-48a7-8471-2ab1e372ad3a',
  date: 'Fri, 25 Mar 2016 11:55:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"fbf2a420-7a7e-4903-8902-a9649948802f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/test-nsg\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/test-route-table\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '741',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fbf2a420-7a7e-4903-8902-a9649948802f"',
  'x-ms-request-id': 'd4920d2d-fde8-4683-94bb-ec0b5d9c4366',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9ff82a24-8c45-48a7-8471-2ab1e372ad3a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115545Z:9ff82a24-8c45-48a7-8471-2ab1e372ad3a',
  date: 'Fri, 25 Mar 2016 11:55:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/69e4f6b4-86c1-4b59-9f83-027b7baaffcf?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '69e4f6b4-86c1-4b59-9f83-027b7baaffcf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/69e4f6b4-86c1-4b59-9f83-027b7baaffcf?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8988845e-4e64-464e-917e-bfe5f4c2b80e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115546Z:8988845e-4e64-464e-917e-bfe5f4c2b80e',
  date: 'Fri, 25 Mar 2016 11:55:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operationResults/69e4f6b4-86c1-4b59-9f83-027b7baaffcf?api-version=2016-03-30',
  'retry-after': '10',
  'x-ms-request-id': '69e4f6b4-86c1-4b59-9f83-027b7baaffcf',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/69e4f6b4-86c1-4b59-9f83-027b7baaffcf?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '8988845e-4e64-464e-917e-bfe5f4c2b80e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115546Z:8988845e-4e64-464e-917e-bfe5f4c2b80e',
  date: 'Fri, 25 Mar 2016 11:55:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/69e4f6b4-86c1-4b59-9f83-027b7baaffcf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3ee515ea-5f65-47ae-a733-99b9a9e60fee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c28f9ecc-1d7c-42ce-a4e6-8b5b3c8b48b7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115617Z:c28f9ecc-1d7c-42ce-a4e6-8b5b3c8b48b7',
  date: 'Fri, 25 Mar 2016 11:56:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/69e4f6b4-86c1-4b59-9f83-027b7baaffcf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3ee515ea-5f65-47ae-a733-99b9a9e60fee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c28f9ecc-1d7c-42ce-a4e6-8b5b3c8b48b7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115617Z:c28f9ecc-1d7c-42ce-a4e6-8b5b3c8b48b7',
  date: 'Fri, 25 Mar 2016 11:56:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"29a00075-1d80-43bd-9fce-9c08a3eb2028\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0024822d-112c-45d2-b63c-226ed805e54e\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"29a00075-1d80-43bd-9fce-9c08a3eb2028"',
  'x-ms-request-id': '9ed57fb1-e9df-411e-9904-e53bc75f0bef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '42e60b49-495c-410a-9ac0-7ebf12594b8e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115618Z:42e60b49-495c-410a-9ac0-7ebf12594b8e',
  date: 'Fri, 25 Mar 2016 11:56:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet\",\r\n  \"etag\": \"W/\\\"29a00075-1d80-43bd-9fce-9c08a3eb2028\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"0024822d-112c-45d2-b63c-226ed805e54e\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": []\r\n    },\r\n    \"subnets\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"29a00075-1d80-43bd-9fce-9c08a3eb2028"',
  'x-ms-request-id': '9ed57fb1-e9df-411e-9904-e53bc75f0bef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '42e60b49-495c-410a-9ac0-7ebf12594b8e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115618Z:42e60b49-495c-410a-9ac0-7ebf12594b8e',
  date: 'Fri, 25 Mar 2016 11:56:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '265',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91d24ad0-d007-464e-9dbe-ffa96fb37a64',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9482989f-14f7-4e44-a980-e9ddac755b0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115619Z:9482989f-14f7-4e44-a980-e9ddac755b0d',
  date: 'Fri, 25 Mar 2016 11:56:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '265',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91d24ad0-d007-464e-9dbe-ffa96fb37a64',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9482989f-14f7-4e44-a980-e9ddac755b0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T115619Z:9482989f-14f7-4e44-a980-e9ddac755b0d',
  date: 'Fri, 25 Mar 2016 11:56:18 GMT',
  connection: 'close' });
 return result; }]];