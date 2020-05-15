const _ = require('lodash');
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('passport');
const User = require('../models/User');
const { requireAuth } = require('../middlewares/passport');


router.post('/', async (req, res, next) => {
  try {
    const newUser = _.pick(req.body, ['username', 'email', 'isTutor', 'description', 'password']);

    console.log(newUser);
    if (!newUser.email || !newUser.password || !newUser.username) {
      console.log('here');
      return res.status(400).json({});
    }

    const existingUser = await User.findOne({
      $or: [{
        email: newUser.email,
      }, {
        usernameLower: newUser.username.toLowerCase(),
      }],
    }).exec();

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists.'});
    }

    const user = new User({
      ...newUser,
      usernameLower: newUser.username.toLowerCase(),
    });

    await user.encrypt();
    await user.save();

    return res.status(200).json(_.omit(user.toJSON(), ['password']));
  } catch (error) {
    return next(error);
  }
});

router.delete('/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).exec();

    if (!user) {
      return res.status(404).json({});
    }
    await user.delete();

    return res.status(200).json({});
  } catch (error) {
    return next(error);
  }
});



function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp, exp: (Date.now() / 1000) + 60 * 60 * 2 }, process.env.HASH_SECRET);
}

router.get('/me', requireAuth, (req, res) => {
  return res.json(_.omit(req.user.toJSON(), ['password']));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send({ message: info.message });
    }

    return res.send({ token: tokenForUser(user), user: _.omit(user.toJSON(), ['password']) });
  })(req, res, next);
});


module.exports = router;