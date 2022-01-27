'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Payment', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'idempotencyKey': 'idempotency_key', 'statusCallback': 'https://example.com'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payments.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var callSid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callSid}/Payments.json`;

      var values = {'IdempotencyKey': 'idempotency_key', 'StatusCallback': 'https://example.com', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid start_payment_session_success response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'date_updated': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'sid': 'PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payments/PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'idempotencyKey': 'idempotency_key', 'statusCallback': 'https://example.com'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payments.create(opts);
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

      var opts = {'idempotencyKey': 'idempotency_key', 'statusCallback': 'https://example.com'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payments('PKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var callSid = 'CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'PKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls/${callSid}/Payments/${sid}.json`;

      var values = {'IdempotencyKey': 'idempotency_key', 'StatusCallback': 'https://example.com', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid collect_credit_card_number response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'date_updated': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'sid': 'PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payments/PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(200, body));

      var opts = {'idempotencyKey': 'idempotency_key', 'statusCallback': 'https://example.com'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payments('PKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid collect_credit_card_expiry_date response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'date_updated': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'sid': 'PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payments/PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(200, body));

      var opts = {'idempotencyKey': 'idempotency_key', 'statusCallback': 'https://example.com'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payments('PKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid complete_payment response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'call_sid': 'CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'date_updated': 'Wed, 18 Dec 2019 20:02:01 +0000',
          'sid': 'PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Calls/CAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payments/PKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(200, body));

      var opts = {'idempotencyKey': 'idempotency_key', 'statusCallback': 'https://example.com'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .calls('CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payments('PKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
