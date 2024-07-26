const User = require('../models/userModel');

exports.signup = (req, res, next) => {
  const { fullName, email, password, uniqueFpoId } = req.body;
  const user = new User({ fullName, email, password, uniqueFpoId });

  user.save()
    .then(result => res.status(201).json(result))
    .catch(err => next(err));
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email, password })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      res.json(user);
    })
    .catch(err => next(err));
};
