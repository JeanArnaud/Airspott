var PDFPrinter = require('../../server/TicketPrinter/PDF'),
    ticketPrinter = {pdf: new PDFPrinter()},
    fs = require('fs');

module.exports = function (Ticket) {

    Ticket.observe('before save', function (ctx, next) {

        if (ctx.isNewInstance) {
            require('crypto').randomBytes(10, function (ex, buf) {
                var token = buf.toString('hex').toUpperCase();

                ctx.instance.number = token.substr(0, 12);
                ctx.instance.code = token.substr(14, 6);

                next();

            });
        }
        else {
            delete ctx.data.number;
            delete ctx.data.code;
            next();
        }
    });

    Ticket.print = function (ticketId, format, res, cb) {
        if (!ticketPrinter[format]) return cb({
            status: 400,
            message: "Ticket format unavailable. Available formats: pdf, pkpass"
        });

        var tickPrinter = ticketPrinter[format];

        Ticket.findById(ticketId, function (err, ticket) {
            if (err) return cb(err);

            tickPrinter.print().then(function (data) {
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
