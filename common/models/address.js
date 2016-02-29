var nominatim = require('nominatim');

module.exports = function (Address) {
    Address.observe('before save', function (ctx, next) {
        var data = ctx.isNewInstance ? ctx.instance : ctx.data;

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
};
