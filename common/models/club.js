var nominatim = require('nominatim');

module.exports = function (Club) {

    Club.observe('before save', function (ctx, next) {
        var data = ctx.isNewInstance ? ctx.instance._address : ctx.data._address;

        nominatim.search({
            q: data.address + ", " + data.zip + " " + data.city + ", " + data.country
        }, function (err, opts, results) {
            if (err) return next(err);

            if (results.length) {
                data.latLon = {lat: results[0].lat, lng: results[0].lon};
            }

            next();
        });
    });


    /**
     * Query clubs for bookable resources and return prepared Club instances
     *
     * @param {String} query param (looking up locations and club names)
     * @param {Number} [amount=1]
     * @param {Date} [date]
     * @param {Array} [offers]
     * @param {Function} cb
     */
    Club.search = function (query, amount, date, offers, cb) {
        query = (function (query) {
            query = query.replace(/ /g, '(.*)');
            query = '.*' + query + '.*';

            return new RegExp(query, "i");
        })(query);

        amount = amount || 1;
        date = date || new Date();
        offers = offers || [];

        var whereFilter = {
            //or: {name: {like: query}}
            name: {like: query}
        };


        Club.find({
            where: whereFilter,
            include: ['address', {relation: 'media', scope: {limit: 1, orderBy: 'order DESC'}}]
        }, cb);
    };

    Club.remoteMethod(
        'search',
        {
            accepts: [
                {
                    arg: 'query',
                    type: 'string',
                    required: true,
                    description: "Query param, either String with venue name and/or [lat,lon] array with geocoords"
                },
                {arg: 'amount', type: 'number', description: "Pass amount to be bookable / free for date"},
                {
                    arg: 'date',
                    type: 'date',
                    description: "Date for when the pass shall be valid and capacities be free"
                },
                {arg: 'offers', type: 'array', description: "Array of offerIds [offerId, offerId] from Offers endpoint"}
            ],
            returns: {arg: 'clubs', type: '[Club]', root: true},
            http: {
                verb: "GET"
            },
            description: "Query clubs for bookable resources"
        }
    );

};
