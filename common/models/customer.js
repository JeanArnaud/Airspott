var path = require('path');

module.exports = function (Customer) {

  Customer.afterRemote('create', function (context, user, next) {
    var options = {
      type: 'email',
      to: user.email,
      from: 'noreply@airspott.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/templates/email/customer-activation.ejs'),
      user: user
    };

    user.verify(options, function (err, response) {
      if (err) return next(err);

      next(null, user);
    });

  });

};
