(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name com.airspott.api
 * @module
 * @description
 *
 * The `com.airspott.api` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("com.airspott.api", ['ngResource']);

/**
 * @ngdoc object
 * @name com.airspott.api.Club
 * @header com.airspott.api.Club
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Club` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Club",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Clubs/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Club.address() instead.
        "prototype$__get__address": {
          url: urlBase + "/Clubs/:id/address",
          method: "GET"
        },

        // INTERNAL. Use Club.address.create() instead.
        "prototype$__create__address": {
          url: urlBase + "/Clubs/:id/address",
          method: "POST"
        },

        // INTERNAL. Use Club.address.update() instead.
        "prototype$__update__address": {
          url: urlBase + "/Clubs/:id/address",
          method: "PUT"
        },

        // INTERNAL. Use Club.address.destroy() instead.
        "prototype$__destroy__address": {
          url: urlBase + "/Clubs/:id/address",
          method: "DELETE"
        },

        // INTERNAL. Use Club.tax() instead.
        "prototype$__get__tax": {
          url: urlBase + "/Clubs/:id/tax",
          method: "GET"
        },

        // INTERNAL. Use Club.media.findById() instead.
        "prototype$__findById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/media/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.media.destroyById() instead.
        "prototype$__destroyById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/media/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.media.updateById() instead.
        "prototype$__updateById__media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/media/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.offers.findById() instead.
        "prototype$__findById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/offers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.offers.destroyById() instead.
        "prototype$__destroyById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/offers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.offers.updateById() instead.
        "prototype$__updateById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/offers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Clubs/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Club.planningEntries.findById() instead.
        "prototype$__findById__planningEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/planningEntries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.planningEntries.destroyById() instead.
        "prototype$__destroyById__planningEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/planningEntries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.planningEntries.updateById() instead.
        "prototype$__updateById__planningEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/planningEntries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.baseCurrency() instead.
        "prototype$__get__baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "GET"
        },

        // INTERNAL. Use Club.baseCurrency.create() instead.
        "prototype$__create__baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "POST"
        },

        // INTERNAL. Use Club.baseCurrency.update() instead.
        "prototype$__update__baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "PUT"
        },

        // INTERNAL. Use Club.baseCurrency.destroy() instead.
        "prototype$__destroy__baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "DELETE"
        },

        // INTERNAL. Use Club.additions.findById() instead.
        "prototype$__findById__additions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/additions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.additions.destroyById() instead.
        "prototype$__destroyById__additions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/additions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.additions.updateById() instead.
        "prototype$__updateById__additions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/additions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.media() instead.
        "prototype$__get__media": {
          isArray: true,
          url: urlBase + "/Clubs/:id/media",
          method: "GET"
        },

        // INTERNAL. Use Club.media.create() instead.
        "prototype$__create__media": {
          url: urlBase + "/Clubs/:id/media",
          method: "POST"
        },

        // INTERNAL. Use Club.media.destroyAll() instead.
        "prototype$__delete__media": {
          url: urlBase + "/Clubs/:id/media",
          method: "DELETE"
        },

        // INTERNAL. Use Club.media.count() instead.
        "prototype$__count__media": {
          url: urlBase + "/Clubs/:id/media/count",
          method: "GET"
        },

        // INTERNAL. Use Club.offers() instead.
        "prototype$__get__offers": {
          isArray: true,
          url: urlBase + "/Clubs/:id/offers",
          method: "GET"
        },

        // INTERNAL. Use Club.offers.create() instead.
        "prototype$__create__offers": {
          url: urlBase + "/Clubs/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use Club.offers.destroyAll() instead.
        "prototype$__delete__offers": {
          url: urlBase + "/Clubs/:id/offers",
          method: "DELETE"
        },

        // INTERNAL. Use Club.offers.count() instead.
        "prototype$__count__offers": {
          url: urlBase + "/Clubs/:id/offers/count",
          method: "GET"
        },

        // INTERNAL. Use Club.planningEntries() instead.
        "prototype$__get__planningEntries": {
          isArray: true,
          url: urlBase + "/Clubs/:id/planningEntries",
          method: "GET"
        },

        // INTERNAL. Use Club.planningEntries.create() instead.
        "prototype$__create__planningEntries": {
          url: urlBase + "/Clubs/:id/planningEntries",
          method: "POST"
        },

        // INTERNAL. Use Club.planningEntries.destroyAll() instead.
        "prototype$__delete__planningEntries": {
          url: urlBase + "/Clubs/:id/planningEntries",
          method: "DELETE"
        },

        // INTERNAL. Use Club.planningEntries.count() instead.
        "prototype$__count__planningEntries": {
          url: urlBase + "/Clubs/:id/planningEntries/count",
          method: "GET"
        },

        // INTERNAL. Use Club.additions() instead.
        "prototype$__get__additions": {
          isArray: true,
          url: urlBase + "/Clubs/:id/additions",
          method: "GET"
        },

        // INTERNAL. Use Club.additions.create() instead.
        "prototype$__create__additions": {
          url: urlBase + "/Clubs/:id/additions",
          method: "POST"
        },

        // INTERNAL. Use Club.additions.destroyAll() instead.
        "prototype$__delete__additions": {
          url: urlBase + "/Clubs/:id/additions",
          method: "DELETE"
        },

        // INTERNAL. Use Club.additions.count() instead.
        "prototype$__count__additions": {
          url: urlBase + "/Clubs/:id/additions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#create
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Clubs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#createMany
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Clubs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#upsert
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Clubs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#exists
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Clubs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#findById
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Clubs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#find
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Clubs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#findOne
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Clubs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#updateAll
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Clubs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#deleteById
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Clubs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#count
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Clubs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#prototype$updateAttributes
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Clubs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#createChangeStream
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Clubs/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#search
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `query` – `{string}` - 
         *
         *  - `amount` – `{number=}` - 
         *
         *  - `date` – `{date=}` - 
         *
         *  - `offers` – `{*=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        "search": {
          isArray: true,
          url: urlBase + "/Clubs/search",
          method: "GET"
        },

        // INTERNAL. Use Customer.clubs.findById() instead.
        "::findById::Customer::clubs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/clubs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.clubs.destroyById() instead.
        "::destroyById::Customer::clubs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/clubs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.clubs.updateById() instead.
        "::updateById::Customer::clubs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/clubs/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.clubs() instead.
        "::get::Customer::clubs": {
          isArray: true,
          url: urlBase + "/Customers/:id/clubs",
          method: "GET"
        },

        // INTERNAL. Use Customer.clubs.create() instead.
        "::create::Customer::clubs": {
          url: urlBase + "/Customers/:id/clubs",
          method: "POST"
        },

        // INTERNAL. Use Customer.clubs.createMany() instead.
        "::createMany::Customer::clubs": {
          isArray: true,
          url: urlBase + "/Customers/:id/clubs",
          method: "POST"
        },

        // INTERNAL. Use Customer.clubs.destroyAll() instead.
        "::delete::Customer::clubs": {
          url: urlBase + "/Customers/:id/clubs",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.clubs.count() instead.
        "::count::Customer::clubs": {
          url: urlBase + "/Customers/:id/clubs/count",
          method: "GET"
        },

        // INTERNAL. Use PlanningEntry.club() instead.
        "::get::PlanningEntry::club": {
          url: urlBase + "/PlanningEntries/:id/club",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Club#updateOrCreate
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#update
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#destroyById
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#removeById
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Club#modelName
    * @propertyOf com.airspott.api.Club
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Club`.
    */
    R.modelName = "Club";

    /**
     * @ngdoc object
     * @name com.airspott.api.Club.address
     * @header com.airspott.api.Club.address
     * @object
     * @description
     *
     * The object `Club.address` groups methods
     * manipulating `Address` instances related to `Club`.
     *
     * Call {@link com.airspott.api.Club#address Club.address()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Club#address
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Fetches hasOne relation address.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::get::Club::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.address#create
         * @methodOf com.airspott.api.Club.address
         *
         * @description
         *
         * Creates a new instance in address of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address.create = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::create::Club::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.address#createMany
         * @methodOf com.airspott.api.Club.address
         *
         * @description
         *
         * Creates a new instance in address of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address.createMany = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::createMany::Club::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.address#destroy
         * @methodOf com.airspott.api.Club.address
         *
         * @description
         *
         * Deletes address of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.address.destroy = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::destroy::Club::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.address#update
         * @methodOf com.airspott.api.Club.address
         *
         * @description
         *
         * Update address of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R.address.update = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::update::Club::address"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#tax
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Fetches belongsTo relation tax.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        R.tax = function() {
          var TargetResource = $injector.get("TAX");
          var action = TargetResource["::get::Club::tax"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Club.media
     * @header com.airspott.api.Club.media
     * @object
     * @description
     *
     * The object `Club.media` groups methods
     * manipulating `Media` instances related to `Club`.
     *
     * Call {@link com.airspott.api.Club#media Club.media()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Club#media
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Queries media of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R.media = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::get::Club::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.media#count
         * @methodOf com.airspott.api.Club.media
         *
         * @description
         *
         * Counts media of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.media.count = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::count::Club::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.media#create
         * @methodOf com.airspott.api.Club.media
         *
         * @description
         *
         * Creates a new instance in media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R.media.create = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::create::Club::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.media#createMany
         * @methodOf com.airspott.api.Club.media
         *
         * @description
         *
         * Creates a new instance in media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R.media.createMany = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::createMany::Club::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.media#destroyAll
         * @methodOf com.airspott.api.Club.media
         *
         * @description
         *
         * Deletes all media of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.media.destroyAll = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::delete::Club::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.media#destroyById
         * @methodOf com.airspott.api.Club.media
         *
         * @description
         *
         * Delete a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.media.destroyById = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::destroyById::Club::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.media#findById
         * @methodOf com.airspott.api.Club.media
         *
         * @description
         *
         * Find a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R.media.findById = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::findById::Club::media"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.media#updateById
         * @methodOf com.airspott.api.Club.media
         *
         * @description
         *
         * Update a related item by id for media.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for media
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R.media.updateById = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::updateById::Club::media"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Club.offers
     * @header com.airspott.api.Club.offers
     * @object
     * @description
     *
     * The object `Club.offers` groups methods
     * manipulating `Offer` instances related to `Club`.
     *
     * Call {@link com.airspott.api.Club#offers Club.offers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Club#offers
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Queries offers of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::get::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.offers#count
         * @methodOf com.airspott.api.Club.offers
         *
         * @description
         *
         * Counts offers of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.offers.count = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::count::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.offers#create
         * @methodOf com.airspott.api.Club.offers
         *
         * @description
         *
         * Creates a new instance in offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.create = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::create::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.offers#createMany
         * @methodOf com.airspott.api.Club.offers
         *
         * @description
         *
         * Creates a new instance in offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.createMany = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::createMany::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.offers#destroyAll
         * @methodOf com.airspott.api.Club.offers
         *
         * @description
         *
         * Deletes all offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offers.destroyAll = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::delete::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.offers#destroyById
         * @methodOf com.airspott.api.Club.offers
         *
         * @description
         *
         * Delete a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offers.destroyById = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::destroyById::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.offers#findById
         * @methodOf com.airspott.api.Club.offers
         *
         * @description
         *
         * Find a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.findById = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::findById::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.offers#updateById
         * @methodOf com.airspott.api.Club.offers
         *
         * @description
         *
         * Update a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R.offers.updateById = function() {
          var TargetResource = $injector.get("Offer");
          var action = TargetResource["::updateById::Club::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club#customer
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Club::customer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Club.planningEntries
     * @header com.airspott.api.Club.planningEntries
     * @object
     * @description
     *
     * The object `Club.planningEntries` groups methods
     * manipulating `PlanningEntry` instances related to `Club`.
     *
     * Call {@link com.airspott.api.Club#planningEntries Club.planningEntries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Club#planningEntries
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Queries planningEntries of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R.planningEntries = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::get::Club::planningEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.planningEntries#count
         * @methodOf com.airspott.api.Club.planningEntries
         *
         * @description
         *
         * Counts planningEntries of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.planningEntries.count = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::count::Club::planningEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.planningEntries#create
         * @methodOf com.airspott.api.Club.planningEntries
         *
         * @description
         *
         * Creates a new instance in planningEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R.planningEntries.create = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::create::Club::planningEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.planningEntries#createMany
         * @methodOf com.airspott.api.Club.planningEntries
         *
         * @description
         *
         * Creates a new instance in planningEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R.planningEntries.createMany = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::createMany::Club::planningEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.planningEntries#destroyAll
         * @methodOf com.airspott.api.Club.planningEntries
         *
         * @description
         *
         * Deletes all planningEntries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.planningEntries.destroyAll = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::delete::Club::planningEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.planningEntries#destroyById
         * @methodOf com.airspott.api.Club.planningEntries
         *
         * @description
         *
         * Delete a related item by id for planningEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for planningEntries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.planningEntries.destroyById = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::destroyById::Club::planningEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.planningEntries#findById
         * @methodOf com.airspott.api.Club.planningEntries
         *
         * @description
         *
         * Find a related item by id for planningEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for planningEntries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R.planningEntries.findById = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::findById::Club::planningEntries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.planningEntries#updateById
         * @methodOf com.airspott.api.Club.planningEntries
         *
         * @description
         *
         * Update a related item by id for planningEntries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for planningEntries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R.planningEntries.updateById = function() {
          var TargetResource = $injector.get("PlanningEntry");
          var action = TargetResource["::updateById::Club::planningEntries"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Club.baseCurrency
     * @header com.airspott.api.Club.baseCurrency
     * @object
     * @description
     *
     * The object `Club.baseCurrency` groups methods
     * manipulating `Currency` instances related to `Club`.
     *
     * Call {@link com.airspott.api.Club#baseCurrency Club.baseCurrency()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Club#baseCurrency
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Fetches hasOne relation baseCurrency.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R.baseCurrency = function() {
          var TargetResource = $injector.get("Currency");
          var action = TargetResource["::get::Club::baseCurrency"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.baseCurrency#create
         * @methodOf com.airspott.api.Club.baseCurrency
         *
         * @description
         *
         * Creates a new instance in baseCurrency of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R.baseCurrency.create = function() {
          var TargetResource = $injector.get("Currency");
          var action = TargetResource["::create::Club::baseCurrency"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.baseCurrency#createMany
         * @methodOf com.airspott.api.Club.baseCurrency
         *
         * @description
         *
         * Creates a new instance in baseCurrency of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R.baseCurrency.createMany = function() {
          var TargetResource = $injector.get("Currency");
          var action = TargetResource["::createMany::Club::baseCurrency"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.baseCurrency#destroy
         * @methodOf com.airspott.api.Club.baseCurrency
         *
         * @description
         *
         * Deletes baseCurrency of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.baseCurrency.destroy = function() {
          var TargetResource = $injector.get("Currency");
          var action = TargetResource["::destroy::Club::baseCurrency"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.baseCurrency#update
         * @methodOf com.airspott.api.Club.baseCurrency
         *
         * @description
         *
         * Update baseCurrency of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R.baseCurrency.update = function() {
          var TargetResource = $injector.get("Currency");
          var action = TargetResource["::update::Club::baseCurrency"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Club.additions
     * @header com.airspott.api.Club.additions
     * @object
     * @description
     *
     * The object `Club.additions` groups methods
     * manipulating `Addition` instances related to `Club`.
     *
     * Call {@link com.airspott.api.Club#additions Club.additions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Club#additions
         * @methodOf com.airspott.api.Club
         *
         * @description
         *
         * Queries additions of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R.additions = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::get::Club::additions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.additions#count
         * @methodOf com.airspott.api.Club.additions
         *
         * @description
         *
         * Counts additions of Club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.additions.count = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::count::Club::additions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.additions#create
         * @methodOf com.airspott.api.Club.additions
         *
         * @description
         *
         * Creates a new instance in additions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R.additions.create = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::create::Club::additions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.additions#createMany
         * @methodOf com.airspott.api.Club.additions
         *
         * @description
         *
         * Creates a new instance in additions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R.additions.createMany = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::createMany::Club::additions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.additions#destroyAll
         * @methodOf com.airspott.api.Club.additions
         *
         * @description
         *
         * Deletes all additions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.additions.destroyAll = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::delete::Club::additions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.additions#destroyById
         * @methodOf com.airspott.api.Club.additions
         *
         * @description
         *
         * Delete a related item by id for additions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for additions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.additions.destroyById = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::destroyById::Club::additions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.additions#findById
         * @methodOf com.airspott.api.Club.additions
         *
         * @description
         *
         * Find a related item by id for additions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for additions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R.additions.findById = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::findById::Club::additions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Club.additions#updateById
         * @methodOf com.airspott.api.Club.additions
         *
         * @description
         *
         * Update a related item by id for additions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for additions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R.additions.updateById = function() {
          var TargetResource = $injector.get("Addition");
          var action = TargetResource["::updateById::Club::additions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Ticket
 * @header com.airspott.api.Ticket
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ticket` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Ticket",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Tickets/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Ticket.sale() instead.
        "prototype$__get__sale": {
          url: urlBase + "/Tickets/:id/sale",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#create
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Tickets",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#createMany
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Tickets",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#upsert
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Tickets",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#exists
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Tickets/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#findById
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Tickets/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#find
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Tickets",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#findOne
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Tickets/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#updateAll
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Tickets/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#deleteById
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Tickets/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#count
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Tickets/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#prototype$updateAttributes
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Tickets/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#createChangeStream
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Tickets/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#updateOrCreate
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#update
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#destroyById
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#removeById
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ticket` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Ticket#modelName
    * @propertyOf com.airspott.api.Ticket
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Ticket`.
    */
    R.modelName = "Ticket";


        /**
         * @ngdoc method
         * @name com.airspott.api.Ticket#sale
         * @methodOf com.airspott.api.Ticket
         *
         * @description
         *
         * Fetches belongsTo relation sale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        R.sale = function() {
          var TargetResource = $injector.get("Sale");
          var action = TargetResource["::get::Ticket::sale"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Rating
 * @header com.airspott.api.Rating
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rating` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rating",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Ratings/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#create
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Ratings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#createMany
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Ratings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#upsert
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Ratings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#exists
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Ratings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#findById
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Ratings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#find
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Ratings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#findOne
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Ratings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#updateAll
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Ratings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#deleteById
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Ratings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#count
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Ratings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#prototype$updateAttributes
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Ratings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#createChangeStream
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Ratings/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#updateOrCreate
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#update
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#destroyById
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Rating#removeById
         * @methodOf com.airspott.api.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Rating#modelName
    * @propertyOf com.airspott.api.Rating
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Rating`.
    */
    R.modelName = "Rating";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Address
 * @header com.airspott.api.Address
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Address` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Address",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Addresses/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#create
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Addresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#createMany
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Addresses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#upsert
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Addresses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#exists
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Addresses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#findById
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Addresses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#find
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Addresses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#findOne
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Addresses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#updateAll
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Addresses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#deleteById
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Addresses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#count
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Addresses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#prototype$updateAttributes
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Addresses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#createChangeStream
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Addresses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Club.address() instead.
        "::get::Club::address": {
          url: urlBase + "/Clubs/:id/address",
          method: "GET"
        },

        // INTERNAL. Use Club.address.create() instead.
        "::create::Club::address": {
          url: urlBase + "/Clubs/:id/address",
          method: "POST"
        },

        // INTERNAL. Use Club.address.createMany() instead.
        "::createMany::Club::address": {
          isArray: true,
          url: urlBase + "/Clubs/:id/address",
          method: "POST"
        },

        // INTERNAL. Use Club.address.update() instead.
        "::update::Club::address": {
          url: urlBase + "/Clubs/:id/address",
          method: "PUT"
        },

        // INTERNAL. Use Club.address.destroy() instead.
        "::destroy::Club::address": {
          url: urlBase + "/Clubs/:id/address",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Address#updateOrCreate
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#update
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#destroyById
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Address#removeById
         * @methodOf com.airspott.api.Address
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Address` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Address#modelName
    * @propertyOf com.airspott.api.Address
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Address`.
    */
    R.modelName = "Address";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.TAX
 * @header com.airspott.api.TAX
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TAX` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "TAX",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/TAXes/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#create
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/TAXes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#createMany
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/TAXes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#upsert
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/TAXes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#exists
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/TAXes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#findById
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/TAXes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#find
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/TAXes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#findOne
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/TAXes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#updateAll
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/TAXes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#deleteById
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/TAXes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#count
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/TAXes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#prototype$updateAttributes
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/TAXes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#createChangeStream
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/TAXes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Club.tax() instead.
        "::get::Club::tax": {
          url: urlBase + "/Clubs/:id/tax",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#updateOrCreate
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#update
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#destroyById
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.TAX#removeById
         * @methodOf com.airspott.api.TAX
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TAX` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.TAX#modelName
    * @propertyOf com.airspott.api.TAX
    * @description
    * The name of the model represented by this $resource,
    * i.e. `TAX`.
    */
    R.modelName = "TAX";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Media
 * @header com.airspott.api.Media
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Media` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Media",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Media/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#create
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Media",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#createMany
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Media",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#upsert
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Media",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#exists
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Media/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#findById
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Media/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#find
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Media",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#findOne
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Media/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#updateAll
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Media/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#deleteById
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Media/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#count
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Media/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#prototype$updateAttributes
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Media/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#createChangeStream
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Media/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Club.media.findById() instead.
        "::findById::Club::media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/media/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.media.destroyById() instead.
        "::destroyById::Club::media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/media/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.media.updateById() instead.
        "::updateById::Club::media": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/media/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.media() instead.
        "::get::Club::media": {
          isArray: true,
          url: urlBase + "/Clubs/:id/media",
          method: "GET"
        },

        // INTERNAL. Use Club.media.create() instead.
        "::create::Club::media": {
          url: urlBase + "/Clubs/:id/media",
          method: "POST"
        },

        // INTERNAL. Use Club.media.createMany() instead.
        "::createMany::Club::media": {
          isArray: true,
          url: urlBase + "/Clubs/:id/media",
          method: "POST"
        },

        // INTERNAL. Use Club.media.destroyAll() instead.
        "::delete::Club::media": {
          url: urlBase + "/Clubs/:id/media",
          method: "DELETE"
        },

        // INTERNAL. Use Club.media.count() instead.
        "::count::Club::media": {
          url: urlBase + "/Clubs/:id/media/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Media#updateOrCreate
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#update
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#destroyById
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Media#removeById
         * @methodOf com.airspott.api.Media
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Media` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Media#modelName
    * @propertyOf com.airspott.api.Media
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Media`.
    */
    R.modelName = "Media";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Offer
 * @header com.airspott.api.Offer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Offer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Offer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Offers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#create
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Offers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#createMany
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Offers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#upsert
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Offers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#exists
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Offers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#findById
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Offers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#find
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Offers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#findOne
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Offers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#updateAll
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Offers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#deleteById
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Offers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#count
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Offers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#prototype$updateAttributes
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Offers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#createChangeStream
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Offers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Club.offers.findById() instead.
        "::findById::Club::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/offers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.offers.destroyById() instead.
        "::destroyById::Club::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/offers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.offers.updateById() instead.
        "::updateById::Club::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/offers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.offers() instead.
        "::get::Club::offers": {
          isArray: true,
          url: urlBase + "/Clubs/:id/offers",
          method: "GET"
        },

        // INTERNAL. Use Club.offers.create() instead.
        "::create::Club::offers": {
          url: urlBase + "/Clubs/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use Club.offers.createMany() instead.
        "::createMany::Club::offers": {
          isArray: true,
          url: urlBase + "/Clubs/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use Club.offers.destroyAll() instead.
        "::delete::Club::offers": {
          url: urlBase + "/Clubs/:id/offers",
          method: "DELETE"
        },

        // INTERNAL. Use Club.offers.count() instead.
        "::count::Club::offers": {
          url: urlBase + "/Clubs/:id/offers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#updateOrCreate
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#update
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#destroyById
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Offer#removeById
         * @methodOf com.airspott.api.Offer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Offer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Offer#modelName
    * @propertyOf com.airspott.api.Offer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Offer`.
    */
    R.modelName = "Offer";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.OwnerAccount
 * @header com.airspott.api.OwnerAccount
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OwnerAccount` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "OwnerAccount",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/OwnerAccounts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#create
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/OwnerAccounts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#createMany
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/OwnerAccounts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#upsert
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/OwnerAccounts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#exists
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/OwnerAccounts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#findById
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/OwnerAccounts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#find
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/OwnerAccounts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#findOne
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/OwnerAccounts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#updateAll
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/OwnerAccounts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#deleteById
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/OwnerAccounts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#count
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/OwnerAccounts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#prototype$updateAttributes
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/OwnerAccounts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#createChangeStream
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/OwnerAccounts/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.ownerAccount() instead.
        "::get::Customer::ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "GET"
        },

        // INTERNAL. Use Customer.ownerAccount.create() instead.
        "::create::Customer::ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "POST"
        },

        // INTERNAL. Use Customer.ownerAccount.createMany() instead.
        "::createMany::Customer::ownerAccount": {
          isArray: true,
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "POST"
        },

        // INTERNAL. Use Customer.ownerAccount.update() instead.
        "::update::Customer::ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "PUT"
        },

        // INTERNAL. Use Customer.ownerAccount.destroy() instead.
        "::destroy::Customer::ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#updateOrCreate
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#update
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#destroyById
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.OwnerAccount#removeById
         * @methodOf com.airspott.api.OwnerAccount
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.OwnerAccount#modelName
    * @propertyOf com.airspott.api.OwnerAccount
    * @description
    * The name of the model represented by this $resource,
    * i.e. `OwnerAccount`.
    */
    R.modelName = "OwnerAccount";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Customer
 * @header com.airspott.api.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Customer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Customers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$__findById__accessTokens
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$__destroyById__accessTokens
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$__updateById__accessTokens
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.ownerAccount() instead.
        "prototype$__get__ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "GET"
        },

        // INTERNAL. Use Customer.ownerAccount.create() instead.
        "prototype$__create__ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "POST"
        },

        // INTERNAL. Use Customer.ownerAccount.update() instead.
        "prototype$__update__ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "PUT"
        },

        // INTERNAL. Use Customer.ownerAccount.destroy() instead.
        "prototype$__destroy__ownerAccount": {
          url: urlBase + "/Customers/:id/ownerAccount",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.clubs.findById() instead.
        "prototype$__findById__clubs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/clubs/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.clubs.destroyById() instead.
        "prototype$__destroyById__clubs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/clubs/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.clubs.updateById() instead.
        "prototype$__updateById__clubs": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/clubs/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$__get__accessTokens
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Queries accessTokens of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Customers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$__create__accessTokens
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Customers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$__delete__accessTokens
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Customers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$__count__accessTokens
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Counts accessTokens of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Customers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.clubs() instead.
        "prototype$__get__clubs": {
          isArray: true,
          url: urlBase + "/Customers/:id/clubs",
          method: "GET"
        },

        // INTERNAL. Use Customer.clubs.create() instead.
        "prototype$__create__clubs": {
          url: urlBase + "/Customers/:id/clubs",
          method: "POST"
        },

        // INTERNAL. Use Customer.clubs.destroyAll() instead.
        "prototype$__delete__clubs": {
          url: urlBase + "/Customers/:id/clubs",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.clubs.count() instead.
        "prototype$__count__clubs": {
          url: urlBase + "/Customers/:id/clubs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#create
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#createMany
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#upsert
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Customers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#exists
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Customers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#findById
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Customers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#find
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#findOne
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Customers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#updateAll
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Customers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#deleteById
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Customers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#count
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#prototype$updateAttributes
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Customers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#createChangeStream
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Customers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#login
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Customers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#logout
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Customers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#confirm
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Customers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#resetPassword
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Customers/reset",
          method: "POST"
        },

        // INTERNAL. Use Club.customer() instead.
        "::get::Club::customer": {
          url: urlBase + "/Clubs/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use SaleProduct.customer() instead.
        "::get::SaleProduct::customer": {
          url: urlBase + "/SaleProducts/:id/customer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#getCurrent
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Customers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#updateOrCreate
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#update
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#destroyById
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#removeById
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#getCachedCurrent
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link com.airspott.api.Customer#login} or
         * {@link com.airspott.api.Customer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Customer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#isAuthenticated
         * @methodOf com.airspott.api.Customer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#getCurrentId
         * @methodOf com.airspott.api.Customer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name com.airspott.api.Customer#modelName
    * @propertyOf com.airspott.api.Customer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Customer`.
    */
    R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name com.airspott.api.Customer.ownerAccount
     * @header com.airspott.api.Customer.ownerAccount
     * @object
     * @description
     *
     * The object `Customer.ownerAccount` groups methods
     * manipulating `OwnerAccount` instances related to `Customer`.
     *
     * Call {@link com.airspott.api.Customer#ownerAccount Customer.ownerAccount()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#ownerAccount
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Fetches hasOne relation ownerAccount.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        R.ownerAccount = function() {
          var TargetResource = $injector.get("OwnerAccount");
          var action = TargetResource["::get::Customer::ownerAccount"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.ownerAccount#create
         * @methodOf com.airspott.api.Customer.ownerAccount
         *
         * @description
         *
         * Creates a new instance in ownerAccount of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        R.ownerAccount.create = function() {
          var TargetResource = $injector.get("OwnerAccount");
          var action = TargetResource["::create::Customer::ownerAccount"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.ownerAccount#createMany
         * @methodOf com.airspott.api.Customer.ownerAccount
         *
         * @description
         *
         * Creates a new instance in ownerAccount of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        R.ownerAccount.createMany = function() {
          var TargetResource = $injector.get("OwnerAccount");
          var action = TargetResource["::createMany::Customer::ownerAccount"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.ownerAccount#destroy
         * @methodOf com.airspott.api.Customer.ownerAccount
         *
         * @description
         *
         * Deletes ownerAccount of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ownerAccount.destroy = function() {
          var TargetResource = $injector.get("OwnerAccount");
          var action = TargetResource["::destroy::Customer::ownerAccount"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.ownerAccount#update
         * @methodOf com.airspott.api.Customer.ownerAccount
         *
         * @description
         *
         * Update ownerAccount of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OwnerAccount` object.)
         * </em>
         */
        R.ownerAccount.update = function() {
          var TargetResource = $injector.get("OwnerAccount");
          var action = TargetResource["::update::Customer::ownerAccount"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Customer.clubs
     * @header com.airspott.api.Customer.clubs
     * @object
     * @description
     *
     * The object `Customer.clubs` groups methods
     * manipulating `Club` instances related to `Customer`.
     *
     * Call {@link com.airspott.api.Customer#clubs Customer.clubs()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Customer#clubs
         * @methodOf com.airspott.api.Customer
         *
         * @description
         *
         * Queries clubs of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R.clubs = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::get::Customer::clubs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.clubs#count
         * @methodOf com.airspott.api.Customer.clubs
         *
         * @description
         *
         * Counts clubs of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.clubs.count = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::count::Customer::clubs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.clubs#create
         * @methodOf com.airspott.api.Customer.clubs
         *
         * @description
         *
         * Creates a new instance in clubs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R.clubs.create = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::create::Customer::clubs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.clubs#createMany
         * @methodOf com.airspott.api.Customer.clubs
         *
         * @description
         *
         * Creates a new instance in clubs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R.clubs.createMany = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::createMany::Customer::clubs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.clubs#destroyAll
         * @methodOf com.airspott.api.Customer.clubs
         *
         * @description
         *
         * Deletes all clubs of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clubs.destroyAll = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::delete::Customer::clubs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.clubs#destroyById
         * @methodOf com.airspott.api.Customer.clubs
         *
         * @description
         *
         * Delete a related item by id for clubs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for clubs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.clubs.destroyById = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::destroyById::Customer::clubs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.clubs#findById
         * @methodOf com.airspott.api.Customer.clubs
         *
         * @description
         *
         * Find a related item by id for clubs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for clubs
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R.clubs.findById = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::findById::Customer::clubs"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Customer.clubs#updateById
         * @methodOf com.airspott.api.Customer.clubs
         *
         * @description
         *
         * Update a related item by id for clubs.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for clubs
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R.clubs.updateById = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::updateById::Customer::clubs"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.PlanningEntry
 * @header com.airspott.api.PlanningEntry
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PlanningEntry` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PlanningEntry",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PlanningEntries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use PlanningEntry.club() instead.
        "prototype$__get__club": {
          url: urlBase + "/PlanningEntries/:id/club",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#create
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PlanningEntries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#createMany
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/PlanningEntries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#upsert
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PlanningEntries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#exists
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/PlanningEntries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#findById
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PlanningEntries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#find
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PlanningEntries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#findOne
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PlanningEntries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#updateAll
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/PlanningEntries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#deleteById
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/PlanningEntries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#count
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/PlanningEntries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#prototype$updateAttributes
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PlanningEntries/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#createChangeStream
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/PlanningEntries/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Club.planningEntries.findById() instead.
        "::findById::Club::planningEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/planningEntries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.planningEntries.destroyById() instead.
        "::destroyById::Club::planningEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/planningEntries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.planningEntries.updateById() instead.
        "::updateById::Club::planningEntries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/planningEntries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.planningEntries() instead.
        "::get::Club::planningEntries": {
          isArray: true,
          url: urlBase + "/Clubs/:id/planningEntries",
          method: "GET"
        },

        // INTERNAL. Use Club.planningEntries.create() instead.
        "::create::Club::planningEntries": {
          url: urlBase + "/Clubs/:id/planningEntries",
          method: "POST"
        },

        // INTERNAL. Use Club.planningEntries.createMany() instead.
        "::createMany::Club::planningEntries": {
          isArray: true,
          url: urlBase + "/Clubs/:id/planningEntries",
          method: "POST"
        },

        // INTERNAL. Use Club.planningEntries.destroyAll() instead.
        "::delete::Club::planningEntries": {
          url: urlBase + "/Clubs/:id/planningEntries",
          method: "DELETE"
        },

        // INTERNAL. Use Club.planningEntries.count() instead.
        "::count::Club::planningEntries": {
          url: urlBase + "/Clubs/:id/planningEntries/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#updateOrCreate
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#update
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#destroyById
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#removeById
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PlanningEntry` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.PlanningEntry#modelName
    * @propertyOf com.airspott.api.PlanningEntry
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PlanningEntry`.
    */
    R.modelName = "PlanningEntry";


        /**
         * @ngdoc method
         * @name com.airspott.api.PlanningEntry#club
         * @methodOf com.airspott.api.PlanningEntry
         *
         * @description
         *
         * Fetches belongsTo relation club.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Club` object.)
         * </em>
         */
        R.club = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::get::PlanningEntry::club"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Currency
 * @header com.airspott.api.Currency
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Currency` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Currency",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Currencies/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#create
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Currencies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#createMany
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Currencies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#upsert
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Currencies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#exists
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Currencies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#findById
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Currencies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#find
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Currencies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#findOne
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Currencies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#updateAll
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Currencies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#deleteById
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Currencies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#count
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Currencies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#prototype$updateAttributes
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Currencies/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#createChangeStream
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Currencies/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Club.baseCurrency() instead.
        "::get::Club::baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "GET"
        },

        // INTERNAL. Use Club.baseCurrency.create() instead.
        "::create::Club::baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "POST"
        },

        // INTERNAL. Use Club.baseCurrency.createMany() instead.
        "::createMany::Club::baseCurrency": {
          isArray: true,
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "POST"
        },

        // INTERNAL. Use Club.baseCurrency.update() instead.
        "::update::Club::baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "PUT"
        },

        // INTERNAL. Use Club.baseCurrency.destroy() instead.
        "::destroy::Club::baseCurrency": {
          url: urlBase + "/Clubs/:id/baseCurrency",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#updateOrCreate
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#update
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#destroyById
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Currency#removeById
         * @methodOf com.airspott.api.Currency
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Currency` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Currency#modelName
    * @propertyOf com.airspott.api.Currency
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Currency`.
    */
    R.modelName = "Currency";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Settings
 * @header com.airspott.api.Settings
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Settings` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Settings",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Settings/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#create
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Settings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#createMany
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Settings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#upsert
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Settings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#exists
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Settings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#findById
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Settings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#find
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Settings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#findOne
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Settings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#updateAll
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Settings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#deleteById
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Settings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#count
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Settings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#prototype$updateAttributes
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Settings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#createChangeStream
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Settings/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#updateOrCreate
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#update
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#destroyById
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Settings#removeById
         * @methodOf com.airspott.api.Settings
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Settings` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Settings#modelName
    * @propertyOf com.airspott.api.Settings
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Settings`.
    */
    R.modelName = "Settings";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Addition
 * @header com.airspott.api.Addition
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Addition` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Addition",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Additions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#create
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Additions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#createMany
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Additions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#upsert
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Additions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#exists
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Additions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#findById
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Additions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#find
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Additions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#findOne
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Additions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#updateAll
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Additions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#deleteById
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Additions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#count
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Additions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#prototype$updateAttributes
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Additions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#createChangeStream
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Additions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Club.additions.findById() instead.
        "::findById::Club::additions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/additions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Club.additions.destroyById() instead.
        "::destroyById::Club::additions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/additions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Club.additions.updateById() instead.
        "::updateById::Club::additions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Clubs/:id/additions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Club.additions() instead.
        "::get::Club::additions": {
          isArray: true,
          url: urlBase + "/Clubs/:id/additions",
          method: "GET"
        },

        // INTERNAL. Use Club.additions.create() instead.
        "::create::Club::additions": {
          url: urlBase + "/Clubs/:id/additions",
          method: "POST"
        },

        // INTERNAL. Use Club.additions.createMany() instead.
        "::createMany::Club::additions": {
          isArray: true,
          url: urlBase + "/Clubs/:id/additions",
          method: "POST"
        },

        // INTERNAL. Use Club.additions.destroyAll() instead.
        "::delete::Club::additions": {
          url: urlBase + "/Clubs/:id/additions",
          method: "DELETE"
        },

        // INTERNAL. Use Club.additions.count() instead.
        "::count::Club::additions": {
          url: urlBase + "/Clubs/:id/additions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#updateOrCreate
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#update
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#destroyById
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Addition#removeById
         * @methodOf com.airspott.api.Addition
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Addition` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Addition#modelName
    * @propertyOf com.airspott.api.Addition
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Addition`.
    */
    R.modelName = "Addition";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Email
 * @header com.airspott.api.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name com.airspott.api.Email#modelName
    * @propertyOf com.airspott.api.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Buyer
 * @header com.airspott.api.Buyer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Buyer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Buyer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Buyers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$__findById__accessTokens
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Buyers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$__destroyById__accessTokens
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Buyers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$__updateById__accessTokens
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Buyers/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$__get__accessTokens
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Queries accessTokens of Buyer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Buyers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$__create__accessTokens
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Buyers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$__delete__accessTokens
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Buyers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$__count__accessTokens
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Counts accessTokens of Buyer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Buyers/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#create
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Buyers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#createMany
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Buyers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#upsert
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Buyers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#exists
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Buyers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#findById
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Buyers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#find
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Buyers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#findOne
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Buyers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#updateAll
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Buyers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#deleteById
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Buyers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#count
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Buyers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#prototype$updateAttributes
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Buyers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#createChangeStream
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Buyers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#login
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Buyers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#logout
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Buyers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#confirm
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Buyers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#resetPassword
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Buyers/reset",
          method: "POST"
        },

        // INTERNAL. Use Sale.buyer() instead.
        "::get::Sale::buyer": {
          url: urlBase + "/Sales/:id/buyer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#getCurrent
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Buyers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#updateOrCreate
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#update
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#destroyById
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#removeById
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#getCachedCurrent
         * @methodOf com.airspott.api.Buyer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link com.airspott.api.Buyer#login} or
         * {@link com.airspott.api.Buyer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Buyer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#isAuthenticated
         * @methodOf com.airspott.api.Buyer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Buyer#getCurrentId
         * @methodOf com.airspott.api.Buyer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name com.airspott.api.Buyer#modelName
    * @propertyOf com.airspott.api.Buyer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Buyer`.
    */
    R.modelName = "Buyer";


    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Sale
 * @header com.airspott.api.Sale
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Sale` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Sale",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Sales/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Sale.buyer() instead.
        "prototype$__get__buyer": {
          url: urlBase + "/Sales/:id/buyer",
          method: "GET"
        },

        // INTERNAL. Use Sale.saleProducts.findById() instead.
        "prototype$__findById__saleProducts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/saleProducts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Sale.saleProducts.destroyById() instead.
        "prototype$__destroyById__saleProducts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/saleProducts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.saleProducts.updateById() instead.
        "prototype$__updateById__saleProducts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/saleProducts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Sale.payments.findById() instead.
        "prototype$__findById__payments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/payments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Sale.payments.destroyById() instead.
        "prototype$__destroyById__payments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/payments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.payments.updateById() instead.
        "prototype$__updateById__payments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/payments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Sale.saleProducts() instead.
        "prototype$__get__saleProducts": {
          isArray: true,
          url: urlBase + "/Sales/:id/saleProducts",
          method: "GET"
        },

        // INTERNAL. Use Sale.saleProducts.create() instead.
        "prototype$__create__saleProducts": {
          url: urlBase + "/Sales/:id/saleProducts",
          method: "POST"
        },

        // INTERNAL. Use Sale.saleProducts.destroyAll() instead.
        "prototype$__delete__saleProducts": {
          url: urlBase + "/Sales/:id/saleProducts",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.saleProducts.count() instead.
        "prototype$__count__saleProducts": {
          url: urlBase + "/Sales/:id/saleProducts/count",
          method: "GET"
        },

        // INTERNAL. Use Sale.payments() instead.
        "prototype$__get__payments": {
          isArray: true,
          url: urlBase + "/Sales/:id/payments",
          method: "GET"
        },

        // INTERNAL. Use Sale.payments.create() instead.
        "prototype$__create__payments": {
          url: urlBase + "/Sales/:id/payments",
          method: "POST"
        },

        // INTERNAL. Use Sale.payments.destroyAll() instead.
        "prototype$__delete__payments": {
          url: urlBase + "/Sales/:id/payments",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.payments.count() instead.
        "prototype$__count__payments": {
          url: urlBase + "/Sales/:id/payments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#create
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Sales",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#createMany
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Sales",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#upsert
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Sales",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#exists
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Sales/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#findById
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Sales/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#find
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Sales",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#findOne
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Sales/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#updateAll
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Sales/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#deleteById
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Sales/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#count
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Sales/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#prototype$updateAttributes
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Sales/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#createChangeStream
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Sales/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Ticket.sale() instead.
        "::get::Ticket::sale": {
          url: urlBase + "/Tickets/:id/sale",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#updateOrCreate
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#update
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#destroyById
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#removeById
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Sale` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Sale#modelName
    * @propertyOf com.airspott.api.Sale
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Sale`.
    */
    R.modelName = "Sale";


        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#buyer
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Fetches belongsTo relation buyer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Buyer` object.)
         * </em>
         */
        R.buyer = function() {
          var TargetResource = $injector.get("Buyer");
          var action = TargetResource["::get::Sale::buyer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Sale.saleProducts
     * @header com.airspott.api.Sale.saleProducts
     * @object
     * @description
     *
     * The object `Sale.saleProducts` groups methods
     * manipulating `SaleProduct` instances related to `Sale`.
     *
     * Call {@link com.airspott.api.Sale#saleProducts Sale.saleProducts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#saleProducts
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Queries saleProducts of Sale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R.saleProducts = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::get::Sale::saleProducts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.saleProducts#count
         * @methodOf com.airspott.api.Sale.saleProducts
         *
         * @description
         *
         * Counts saleProducts of Sale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.saleProducts.count = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::count::Sale::saleProducts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.saleProducts#create
         * @methodOf com.airspott.api.Sale.saleProducts
         *
         * @description
         *
         * Creates a new instance in saleProducts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R.saleProducts.create = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::create::Sale::saleProducts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.saleProducts#createMany
         * @methodOf com.airspott.api.Sale.saleProducts
         *
         * @description
         *
         * Creates a new instance in saleProducts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R.saleProducts.createMany = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::createMany::Sale::saleProducts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.saleProducts#destroyAll
         * @methodOf com.airspott.api.Sale.saleProducts
         *
         * @description
         *
         * Deletes all saleProducts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.saleProducts.destroyAll = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::delete::Sale::saleProducts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.saleProducts#destroyById
         * @methodOf com.airspott.api.Sale.saleProducts
         *
         * @description
         *
         * Delete a related item by id for saleProducts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for saleProducts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.saleProducts.destroyById = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::destroyById::Sale::saleProducts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.saleProducts#findById
         * @methodOf com.airspott.api.Sale.saleProducts
         *
         * @description
         *
         * Find a related item by id for saleProducts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for saleProducts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R.saleProducts.findById = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::findById::Sale::saleProducts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.saleProducts#updateById
         * @methodOf com.airspott.api.Sale.saleProducts
         *
         * @description
         *
         * Update a related item by id for saleProducts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for saleProducts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R.saleProducts.updateById = function() {
          var TargetResource = $injector.get("SaleProduct");
          var action = TargetResource["::updateById::Sale::saleProducts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name com.airspott.api.Sale.payments
     * @header com.airspott.api.Sale.payments
     * @object
     * @description
     *
     * The object `Sale.payments` groups methods
     * manipulating `Payment` instances related to `Sale`.
     *
     * Call {@link com.airspott.api.Sale#payments Sale.payments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name com.airspott.api.Sale#payments
         * @methodOf com.airspott.api.Sale
         *
         * @description
         *
         * Queries payments of Sale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R.payments = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::get::Sale::payments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.payments#count
         * @methodOf com.airspott.api.Sale.payments
         *
         * @description
         *
         * Counts payments of Sale.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.payments.count = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::count::Sale::payments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.payments#create
         * @methodOf com.airspott.api.Sale.payments
         *
         * @description
         *
         * Creates a new instance in payments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R.payments.create = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::create::Sale::payments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.payments#createMany
         * @methodOf com.airspott.api.Sale.payments
         *
         * @description
         *
         * Creates a new instance in payments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R.payments.createMany = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::createMany::Sale::payments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.payments#destroyAll
         * @methodOf com.airspott.api.Sale.payments
         *
         * @description
         *
         * Deletes all payments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.payments.destroyAll = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::delete::Sale::payments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.payments#destroyById
         * @methodOf com.airspott.api.Sale.payments
         *
         * @description
         *
         * Delete a related item by id for payments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for payments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.payments.destroyById = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::destroyById::Sale::payments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.payments#findById
         * @methodOf com.airspott.api.Sale.payments
         *
         * @description
         *
         * Find a related item by id for payments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for payments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R.payments.findById = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::findById::Sale::payments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name com.airspott.api.Sale.payments#updateById
         * @methodOf com.airspott.api.Sale.payments
         *
         * @description
         *
         * Update a related item by id for payments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for payments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R.payments.updateById = function() {
          var TargetResource = $injector.get("Payment");
          var action = TargetResource["::updateById::Sale::payments"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.SaleProduct
 * @header com.airspott.api.SaleProduct
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SaleProduct` model.
 *
 * **Details**
 *
 * A sale product represents any product included in a sale referencing owner name and email (this may be a Club but also an addition - baseProduct shall be a static object of the sold product at sale time!)
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SaleProduct",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SaleProducts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SaleProduct.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/SaleProducts/:id/customer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#create
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SaleProducts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#createMany
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SaleProducts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#upsert
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SaleProducts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#exists
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SaleProducts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#findById
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SaleProducts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#find
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SaleProducts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#findOne
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SaleProducts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#updateAll
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/SaleProducts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#deleteById
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/SaleProducts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#count
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SaleProducts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#prototype$updateAttributes
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SaleProducts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#createChangeStream
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SaleProducts/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Sale.saleProducts.findById() instead.
        "::findById::Sale::saleProducts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/saleProducts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Sale.saleProducts.destroyById() instead.
        "::destroyById::Sale::saleProducts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/saleProducts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.saleProducts.updateById() instead.
        "::updateById::Sale::saleProducts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/saleProducts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Sale.saleProducts() instead.
        "::get::Sale::saleProducts": {
          isArray: true,
          url: urlBase + "/Sales/:id/saleProducts",
          method: "GET"
        },

        // INTERNAL. Use Sale.saleProducts.create() instead.
        "::create::Sale::saleProducts": {
          url: urlBase + "/Sales/:id/saleProducts",
          method: "POST"
        },

        // INTERNAL. Use Sale.saleProducts.createMany() instead.
        "::createMany::Sale::saleProducts": {
          isArray: true,
          url: urlBase + "/Sales/:id/saleProducts",
          method: "POST"
        },

        // INTERNAL. Use Sale.saleProducts.destroyAll() instead.
        "::delete::Sale::saleProducts": {
          url: urlBase + "/Sales/:id/saleProducts",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.saleProducts.count() instead.
        "::count::Sale::saleProducts": {
          url: urlBase + "/Sales/:id/saleProducts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#updateOrCreate
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#update
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#destroyById
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#removeById
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SaleProduct` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.SaleProduct#modelName
    * @propertyOf com.airspott.api.SaleProduct
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SaleProduct`.
    */
    R.modelName = "SaleProduct";


        /**
         * @ngdoc method
         * @name com.airspott.api.SaleProduct#customer
         * @methodOf com.airspott.api.SaleProduct
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::SaleProduct::customer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name com.airspott.api.Payment
 * @header com.airspott.api.Payment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Payment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Payment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Payments/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#create
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Payments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#createMany
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Payments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#upsert
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Payments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#exists
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Payments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#findById
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Payments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#find
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Payments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#findOne
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Payments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#updateAll
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Payments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#deleteById
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Payments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#count
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Payments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#prototype$updateAttributes
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Payments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#createChangeStream
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Payments/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Sale.payments.findById() instead.
        "::findById::Sale::payments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/payments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Sale.payments.destroyById() instead.
        "::destroyById::Sale::payments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/payments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.payments.updateById() instead.
        "::updateById::Sale::payments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Sales/:id/payments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Sale.payments() instead.
        "::get::Sale::payments": {
          isArray: true,
          url: urlBase + "/Sales/:id/payments",
          method: "GET"
        },

        // INTERNAL. Use Sale.payments.create() instead.
        "::create::Sale::payments": {
          url: urlBase + "/Sales/:id/payments",
          method: "POST"
        },

        // INTERNAL. Use Sale.payments.createMany() instead.
        "::createMany::Sale::payments": {
          isArray: true,
          url: urlBase + "/Sales/:id/payments",
          method: "POST"
        },

        // INTERNAL. Use Sale.payments.destroyAll() instead.
        "::delete::Sale::payments": {
          url: urlBase + "/Sales/:id/payments",
          method: "DELETE"
        },

        // INTERNAL. Use Sale.payments.count() instead.
        "::count::Sale::payments": {
          url: urlBase + "/Sales/:id/payments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#updateOrCreate
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#update
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#destroyById
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name com.airspott.api.Payment#removeById
         * @methodOf com.airspott.api.Payment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Payment` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name com.airspott.api.Payment#modelName
    * @propertyOf com.airspott.api.Payment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Payment`.
    */
    R.modelName = "Payment";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name com.airspott.api.LoopBackResourceProvider
   * @header com.airspott.api.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name com.airspott.api.LoopBackResourceProvider#setAuthHeader
     * @methodOf com.airspott.api.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name com.airspott.api.LoopBackResourceProvider#setUrlBase
     * @methodOf com.airspott.api.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name com.airspott.api.LoopBackResourceProvider#getUrlBase
     * @methodOf com.airspott.api.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
