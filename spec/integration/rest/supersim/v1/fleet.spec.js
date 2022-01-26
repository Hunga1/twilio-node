'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Fleet', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'networkAccessProfile': 'HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.supersim.v1.fleets.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/Fleets';

      var values = {'NetworkAccessProfile': 'HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'payg',
          'date_created': '2019-07-30T20:00:00Z',
          'date_updated': '2019-07-30T20:00:00Z',
          'commands_enabled': true,
          'commands_method': 'GET',
          'commands_url': 'https://google.com',
          'sms_commands_enabled': true,
          'sms_commands_method': 'GET',
          'sms_commands_url': 'https://google.com',
          'ip_commands_method': 'GET',
          'ip_commands_url': 'https://google.com',
          'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://supersim.twilio.com/v1/Fleets/HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'networkAccessProfile': 'HAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.supersim.v1.fleets.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.fleets('HFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'HFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/Fleets/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'payg',
          'date_created': '2019-07-30T20:00:00Z',
          'date_updated': '2019-07-30T20:00:00Z',
          'commands_enabled': true,
          'commands_method': 'POST',
          'commands_url': null,
          'sms_commands_enabled': true,
          'sms_commands_method': 'POST',
          'sms_commands_url': null,
          'ip_commands_method': 'POST',
          'ip_commands_url': null,
          'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://supersim.twilio.com/v1/Fleets/HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.fleets('HFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'fleets',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'fleets': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'Pilot Fleet',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-10-15T20:00:00Z',
                  'date_updated': '2019-10-15T20:00:00Z',
                  'commands_enabled': true,
                  'commands_method': 'POST',
                  'commands_url': null,
                  'sms_commands_enabled': true,
                  'sms_commands_method': 'POST',
                  'sms_commands_url': null,
                  'ip_commands_method': 'POST',
                  'ip_commands_url': null,
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://supersim.twilio.com/v1/Fleets/HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.fleets.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'fleets',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'fleets': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'Pilot Fleet',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-10-15T20:00:00Z',
                  'date_updated': '2019-10-15T20:00:00Z',
                  'commands_enabled': true,
                  'commands_method': 'POST',
                  'commands_url': null,
                  'sms_commands_enabled': true,
                  'sms_commands_method': 'POST',
                  'sms_commands_url': null,
                  'ip_commands_method': 'POST',
                  'ip_commands_url': null,
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://supersim.twilio.com/v1/Fleets/HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.fleets.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://supersim.twilio.com/v1/Fleets',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'fleets',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'fleets': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'Pilot Fleet',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-10-15T20:00:00Z',
                  'date_updated': '2019-10-15T20:00:00Z',
                  'commands_enabled': true,
                  'commands_method': 'POST',
                  'commands_url': null,
                  'sms_commands_enabled': true,
                  'sms_commands_method': 'POST',
                  'sms_commands_url': null,
                  'ip_commands_method': 'POST',
                  'ip_commands_url': null,
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://supersim.twilio.com/v1/Fleets/HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.fleets.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.fleets.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/Fleets';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'fleets': [],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'fleets',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.fleets.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'fleets',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/Fleets?NetworkAccessProfile=HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'fleets': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'Pilot Fleet',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-10-15T20:00:00Z',
                  'date_updated': '2019-10-15T20:00:00Z',
                  'commands_enabled': true,
                  'commands_method': 'POST',
                  'commands_url': null,
                  'sms_commands_enabled': true,
                  'sms_commands_method': 'POST',
                  'sms_commands_url': null,
                  'ip_commands_method': 'POST',
                  'ip_commands_url': null,
                  'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://supersim.twilio.com/v1/Fleets/HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.fleets.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.fleets('HFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'HFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/Fleets/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update_unique_name response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'payg',
          'date_created': '2019-10-15T20:00:00Z',
          'date_updated': '2019-10-15T20:00:00Z',
          'commands_enabled': true,
          'commands_method': 'POST',
          'commands_url': null,
          'sms_commands_enabled': true,
          'sms_commands_method': 'POST',
          'sms_commands_url': null,
          'ip_commands_method': 'POST',
          'ip_commands_url': null,
          'network_access_profile_sid': 'HAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://supersim.twilio.com/v1/Fleets/HFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.fleets('HFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
