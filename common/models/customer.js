var path = require('path');
var loopback = require("loopback");
module.exports = function (Customer) {

  Customer.afterRemote('create', function (context, user, next) {
    var options = {
      type: 'email',
      to: user.email,
      from: 'test.narolainfotech@gmail.com',
      subject: 'Thanks for registering.',
      // template: path.resolve(__dirname, '../../server/templates/email/customer-activation.ejs'),
      template: path.resolve(__dirname, '../../client/club-new/email.ejs'),
      user: user
    };

    user.verify(options, function (err, response) {
      if (err) return next(err);

      next(null, user);
    });

  });

}; 