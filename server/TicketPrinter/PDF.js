var Rsvg = require('librsvg').Rsvg,
    fs = require('fs'),
    Q = require('q');

/**
 * PDF Ticket printer exporting a ticket to PDF from Svg template
 * @constructor
 * @class PDFPrinter
 * @implements TicketPrinter
 */
function PDFPrinter() {

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

        fs.createReadStream('./server/templates/ticket/default.svg').pipe(svg);

        return deferred.promise;
    };

    return this;

}

module.exports = PDFPrinter;
