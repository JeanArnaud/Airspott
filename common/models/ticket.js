var PDFPrinter = require('../../server/TicketPrinter/PDF'),
    ticketPrinter = new PDFPrinter(),
    fs = require('fs');

module.exports = function (Ticket) {

    Ticket.observe('before save', function (ctx, next) {

        // TODO: Generate unique Ticket IDs

        next();
    });

    Ticket.print = function (format, ticketId, res, cb) {

        ticketPrinter.print().then(function (data) {
            res.set('Expires', new Date());
            res.set('Cache-Control', 'max-age=0, no-cache, must-revalidate, proxy-revalidate');
            res.set('Last-Modified', new Date() + 'GMT');
            res.set('Content-Type', 'application/force-download');
            res.set('Content-Type', 'application/octet-stream');
            res.set('Content-Type', 'application/download');
            res.set('Content-Disposition', 'attachment;filename=Airspott_Ticket.pdf');
            res.set('Content-Transfer-Encoding', 'binary');
            res.send(data);
        });

    };

    Ticket.remoteMethod(
        'print',
        {
            accepts: [
                {arg: 'ticketId', type: 'string', required: true},
                {arg: 'format', type: 'string', required: true},
                {arg: 'res', type: 'object', 'http': {source: 'res'}}
            ],
            http: {
                verb: "GET",
                path: "/print/:ticketId/:format"
            },
            description: "Print a ticket (default: PDF)"
        }
    );

};
