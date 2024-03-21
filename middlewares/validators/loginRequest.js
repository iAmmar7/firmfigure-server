const { check, validationResult } = require('express-validator');

const validateLoginRequest = [
  check('email', 'Valid email is required').isEmail(),
  check('email').normalizeEmail(),

  check('password', 'Password is required').not().isEmpty(),
  check('password', 'Password must be a string').isString(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateLoginRequest;
