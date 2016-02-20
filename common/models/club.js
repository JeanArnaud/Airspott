module.exports = function (Club) {

    Club.search = function (query, amount, date, offers, cb) {
        query = new RegExp('.*' + query + '.*', "i");
        amount = amount || 1;
        date = date || new Date();
        offers = offers || [];

        console.log(arguments);

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
                {arg: 'query', type: 'string', required: true},
                {arg: 'amount', type: 'number'},
                {arg: 'date', type: 'date'},
                {arg: 'offers', type: 'array'}
            ],
            returns: {arg: 'clubs', type: 'array', root: true},
            http: {
                verb: "GET"
            }
        }
    );

};
