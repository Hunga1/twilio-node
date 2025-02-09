'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ConnectionPolicyTargetList;
var ConnectionPolicyTargetPage;
var ConnectionPolicyTargetInstance;
var ConnectionPolicyTargetContext;

/* jshint ignore:start */
/**
 * Initialize the ConnectionPolicyTargetList
 *
 * @constructor Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList
 *
 * @param {Twilio.Voice.V1} version - Version of the resource
 * @param {string} connectionPolicySid -
 *          The SID of the Connection Policy that owns the Target
 */
/* jshint ignore:end */
ConnectionPolicyTargetList = function ConnectionPolicyTargetList(version,
    connectionPolicySid) {
  /* jshint ignore:start */
  /**
   * @function targets
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetContext}
   */
  /* jshint ignore:end */
  function ConnectionPolicyTargetListInstance(sid) {
    return ConnectionPolicyTargetListInstance.get(sid);
  }

  ConnectionPolicyTargetListInstance._version = version;
  // Path Solution
  ConnectionPolicyTargetListInstance._solution = {connectionPolicySid: connectionPolicySid};
  ConnectionPolicyTargetListInstance._uri = `/ConnectionPolicies/${connectionPolicySid}/Targets`;
  /* jshint ignore:start */
  /**
   * create a ConnectionPolicyTargetInstance
   *
   * @function create
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.target -
   *          The SIP address you want Twilio to route your calls to
   * @param {string} [opts.friendlyName] - A string to describe the resource
   * @param {number} [opts.priority] - The relative importance of the target
   * @param {number} [opts.weight] -
   *          The value that determines the relative load the Target should receive compared to others with the same priority
   * @param {boolean} [opts.enabled] - Whether the Target is enabled
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ConnectionPolicyTargetInstance
   */
  /* jshint ignore:end */
  ConnectionPolicyTargetListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.target)) {
      throw new Error('Required parameter "opts.target" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Target': _.get(opts, 'target'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Priority': _.get(opts, 'priority'),
      'Weight': _.get(opts, 'weight'),
      'Enabled': serialize.bool(_.get(opts, 'enabled'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ConnectionPolicyTargetInstance(
        this._version,
        payload,
        this._solution.connectionPolicySid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams ConnectionPolicyTargetInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  ConnectionPolicyTargetListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        } else {
          onComplete();
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists ConnectionPolicyTargetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConnectionPolicyTargetListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of ConnectionPolicyTargetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConnectionPolicyTargetListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ConnectionPolicyTargetPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of ConnectionPolicyTargetInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConnectionPolicyTargetListInstance.getPage = function getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ConnectionPolicyTargetPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a connection_policy_target
   *
   * @function get
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetContext}
   */
  /* jshint ignore:end */
  ConnectionPolicyTargetListInstance.get = function get(sid) {
    return new ConnectionPolicyTargetContext(this._version, this._solution.connectionPolicySid, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ConnectionPolicyTargetListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ConnectionPolicyTargetListInstance[util.inspect.custom] = function
      inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return ConnectionPolicyTargetListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ConnectionPolicyTargetPage
 *
 * @constructor Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ConnectionPolicyTargetSolution} solution - Path solution
 *
 * @returns ConnectionPolicyTargetPage
 */
/* jshint ignore:end */
ConnectionPolicyTargetPage = function ConnectionPolicyTargetPage(version,
    response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ConnectionPolicyTargetPage.prototype, Page.prototype);
ConnectionPolicyTargetPage.prototype.constructor = ConnectionPolicyTargetPage;

/* jshint ignore:start */
/**
 * Build an instance of ConnectionPolicyTargetInstance
 *
 * @function getInstance
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetPage#
 *
 * @param {ConnectionPolicyTargetPayload} payload - Payload response from the API
 *
 * @returns ConnectionPolicyTargetInstance
 */
/* jshint ignore:end */
ConnectionPolicyTargetPage.prototype.getInstance = function getInstance(payload)
    {
  return new ConnectionPolicyTargetInstance(
    this._version,
    payload,
    this._solution.connectionPolicySid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConnectionPolicyTargetPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ConnectionPolicyTargetPage.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ConnectionPolicyTargetContext
 *
 * @constructor Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} connectionPolicySid -
 *          The SID of the Connection Policy that owns the Target
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {string} target -
 *          The SIP address you want Twilio to route your calls to
 * @property {number} priority - The relative importance of the target
 * @property {number} weight -
 *          The value that determines the relative load the Target should receive compared to others with the same priority
 * @property {boolean} enabled - Whether the target is enabled
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT when the resource was last updated
 * @property {string} url - The absolute URL of the resource
 *
 * @param {V1} version - Version of the resource
 * @param {ConnectionPolicyTargetPayload} payload - The instance payload
 * @param {sid} connectionPolicySid -
 *          The SID of the Connection Policy that owns the Target
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ConnectionPolicyTargetInstance = function
    ConnectionPolicyTargetInstance(version, payload, connectionPolicySid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.connectionPolicySid = payload.connection_policy_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.target = payload.target; // jshint ignore:line
  this.priority = deserialize.integer(payload.priority); // jshint ignore:line
  this.weight = deserialize.integer(payload.weight); // jshint ignore:line
  this.enabled = payload.enabled; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {connectionPolicySid: connectionPolicySid, sid: sid || this.sid, };
};

Object.defineProperty(ConnectionPolicyTargetInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ConnectionPolicyTargetContext(
          this._version,
          this._solution.connectionPolicySid,
          this._solution.sid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ConnectionPolicyTargetInstance
 *
 * @function fetch
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectionPolicyTargetInstance
 */
/* jshint ignore:end */
ConnectionPolicyTargetInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ConnectionPolicyTargetInstance
 *
 * @function update
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.target] -
 *          The SIP address you want Twilio to route your calls to
 * @param {number} [opts.priority] - The relative importance of the target
 * @param {number} [opts.weight] -
 *          The value that determines the relative load the Target should receive compared to others with the same priority
 * @param {boolean} [opts.enabled] - Whether the Target is enabled
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectionPolicyTargetInstance
 */
/* jshint ignore:end */
ConnectionPolicyTargetInstance.prototype.update = function update(opts,
    callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a ConnectionPolicyTargetInstance
 *
 * @function remove
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectionPolicyTargetInstance
 */
/* jshint ignore:end */
ConnectionPolicyTargetInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConnectionPolicyTargetInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ConnectionPolicyTargetInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ConnectionPolicyTargetContext
 *
 * @constructor Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} connectionPolicySid -
 *          The SID of the Connection Policy that owns the Target
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ConnectionPolicyTargetContext = function ConnectionPolicyTargetContext(version,
    connectionPolicySid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {connectionPolicySid: connectionPolicySid, sid: sid, };
  this._uri = `/ConnectionPolicies/${connectionPolicySid}/Targets/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a ConnectionPolicyTargetInstance
 *
 * @function fetch
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectionPolicyTargetInstance
 */
/* jshint ignore:end */
ConnectionPolicyTargetContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectionPolicyTargetInstance(
      this._version,
      payload,
      this._solution.connectionPolicySid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a ConnectionPolicyTargetInstance
 *
 * @function update
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.target] -
 *          The SIP address you want Twilio to route your calls to
 * @param {number} [opts.priority] - The relative importance of the target
 * @param {number} [opts.weight] -
 *          The value that determines the relative load the Target should receive compared to others with the same priority
 * @param {boolean} [opts.enabled] - Whether the Target is enabled
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectionPolicyTargetInstance
 */
/* jshint ignore:end */
ConnectionPolicyTargetContext.prototype.update = function update(opts, callback)
    {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'Target': _.get(opts, 'target'),
    'Priority': _.get(opts, 'priority'),
    'Weight': _.get(opts, 'weight'),
    'Enabled': serialize.bool(_.get(opts, 'enabled'))
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectionPolicyTargetInstance(
      this._version,
      payload,
      this._solution.connectionPolicySid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a ConnectionPolicyTargetInstance
 *
 * @function remove
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectionPolicyTargetInstance
 */
/* jshint ignore:end */
ConnectionPolicyTargetContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Voice.V1.ConnectionPolicyContext.ConnectionPolicyTargetContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConnectionPolicyTargetContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ConnectionPolicyTargetContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ConnectionPolicyTargetList: ConnectionPolicyTargetList,
  ConnectionPolicyTargetPage: ConnectionPolicyTargetPage,
  ConnectionPolicyTargetInstance: ConnectionPolicyTargetInstance,
  ConnectionPolicyTargetContext: ConnectionPolicyTargetContext
};
