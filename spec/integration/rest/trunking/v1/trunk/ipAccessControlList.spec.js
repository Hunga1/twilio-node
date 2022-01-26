'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('IpAccessControlList', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trunkSid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/IpAccessControlLists/${sid}`;

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
          'date_created': '2018-05-02T17:29:34Z',
          'date_updated': '2018-05-02T17:29:34Z',
          'friendly_name': 'friendly_name',
          'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trunkSid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/IpAccessControlLists/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists('ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'ipAccessControlListSid': 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trunkSid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/IpAccessControlLists`;

      var values = {'IpAccessControlListSid': 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
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
          'date_created': '2018-04-30T20:59:06Z',
          'date_updated': '2018-04-30T20:59:06Z',
          'friendly_name': 'friendly_name',
          'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'ipAccessControlListSid': 'ALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists.create(opts);
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
          'ip_access_control_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2018-05-02T17:29:34Z',
                  'date_updated': '2018-05-02T17:29:34Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
              'key': 'ip_access_control_lists',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .ipAccessControlLists.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'ip_access_control_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2018-05-02T17:29:34Z',
                  'date_updated': '2018-05-02T17:29:34Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
              'key': 'ip_access_control_lists',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .ipAccessControlLists.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://trunking.twilio.com/v1/Trunks/${trunkSid}/IpAccessControlLists',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'ip_access_control_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2018-05-02T17:29:34Z',
                  'date_updated': '2018-05-02T17:29:34Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
              'key': 'ip_access_control_lists',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                        .ipAccessControlLists.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var trunkSid = 'TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://trunking.twilio.com/v1/Trunks/${trunkSid}/IpAccessControlLists`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'ip_access_control_lists': [],
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
              'key': 'ip_access_control_lists',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists.list();
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
          'ip_access_control_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2018-05-02T17:29:34Z',
                  'date_updated': '2018-05-02T17:29:34Z',
                  'friendly_name': 'friendly_name',
                  'sid': 'ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'trunk_sid': 'TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists/ALaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0',
              'key': 'ip_access_control_lists',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://trunking.twilio.com/v1/Trunks/TKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlLists?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.trunking.v1.trunks('TKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                      .ipAccessControlLists.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
