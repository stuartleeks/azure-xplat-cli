// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet1/gateway/publicdiagnostics')
  .reply(200, "<GatewayPublicDiagnosticsStatus xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><PublicDiagnosticsUrl/><State>StopInProgress</State></GatewayPublicDiagnosticsStatus>", { 'cache-control': 'no-cache',
  'content-length': '219',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '716f1f8bcdf2bf1090b31c0057a11513',
  date: 'Thu, 18 Jun 2015 14:26:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/CliGtTestVnet1/gateway/publicdiagnostics')
  .reply(200, "<GatewayPublicDiagnosticsStatus xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><PublicDiagnosticsUrl/><State>StopInProgress</State></GatewayPublicDiagnosticsStatus>", { 'cache-control': 'no-cache',
  'content-length': '219',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '716f1f8bcdf2bf1090b31c0057a11513',
  date: 'Thu, 18 Jun 2015 14:26:31 GMT',
  connection: 'close' });
 return result; }]];