var Rsvg = require('librsvg').Rsvg,
    fs = require('fs'),
    Q = require('q');

/**
 * PDF Ticket printer exporting a ticket to PDF from Svg template
 * @constructor
 * @implements TicketPrinter
 */
function PDF() {

    this.print = function () {
        var svg = new Rsvg(),
            deferred = Q.defer();

        svg.on('finish', function () {
            deferred.resolve(svg.render({
                format: 'pdf',
                width: svg.width,
                height: svg.height
            }).data);
        });

        fs.createReadStream('./server/assets/ticket.svg').pipe(svg);

        return deferred.promise;
    };

    return this;

}

module.exports = PDF;
