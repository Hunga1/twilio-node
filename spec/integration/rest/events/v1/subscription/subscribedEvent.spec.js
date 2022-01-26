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

describe('SubscribedEvent', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'types': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_version': 2,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.delivered'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_version': 15,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.failed'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };
      holodeck.mock(new Response(200, body));
      client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .subscribedEvents.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'types': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_version': 2,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.delivered'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_version': 15,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.failed'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };
      holodeck.mock(new Response(200, body));
      client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .subscribedEvents.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://events.twilio.com/v1/Subscriptions/${subscriptionSid}/SubscribedEvents',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'types': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_version': 2,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.delivered'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_version': 15,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.failed'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };
      holodeck.mock(new Response(200, body));
      client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .subscribedEvents.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var subscriptionSid = 'DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://events.twilio.com/v1/Subscriptions/${subscriptionSid}/SubscribedEvents`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'types': [],
          'meta': {
              'page': 0,
              'page_size': 10,
              'first_page_url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=10&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=10&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_results response',
    function(done) {
      var body = {
          'types': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.delivered',
                  'schema_version': 2,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.delivered'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'com.twilio.messaging.message.failed',
                  'schema_version': 15,
                  'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.failed'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'types'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'type': 'type'};
      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var subscriptionSid = 'DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://events.twilio.com/v1/Subscriptions/${subscriptionSid}/SubscribedEvents`;

      var values = {'Type': 'type', };
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
          'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'com.twilio.messaging.message.delivered',
          'schema_version': 2,
          'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.delivered'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'type': 'type'};
      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents.create(opts);
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

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents('type').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var subscriptionSid = 'DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var type = 'type';
      var url = `https://events.twilio.com/v1/Subscriptions/${subscriptionSid}/SubscribedEvents/${type}`;

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
          'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'com.twilio.messaging.message.delivered',
          'schema_version': 2,
          'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.delivered'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents('type').fetch();
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

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents('type').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var subscriptionSid = 'DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var type = 'type';
      var url = `https://events.twilio.com/v1/Subscriptions/${subscriptionSid}/SubscribedEvents/${type}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'subscription_sid': 'DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'com.twilio.messaging.message.delivered',
          'schema_version': 2,
          'url': 'https://events.twilio.com/v1/Subscriptions/DFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedEvents/com.twilio.messaging.message.delivered'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents('type').update();
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

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents('type').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var subscriptionSid = 'DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var type = 'type';
      var url = `https://events.twilio.com/v1/Subscriptions/${subscriptionSid}/SubscribedEvents/${type}`;

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

      var promise = client.events.v1.subscriptions('DFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .subscribedEvents('type').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
