const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Protect routes - verify token and set req.user
exports.protect = async (req, res, next) => {
  try {
    let token;

    // Check if token exists in Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        message: 'You are not logged in. Please log in to get access.',
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'ultrasecret');

    // Find user by id
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: 'The user belonging to this token no longer exists.',
      });
    }

    // Set user on request object
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token. Please log in again.' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Your token has expired. Please log in again.' });
    }
    console.error('Auth middleware error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Restrict routes to specific roles
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'You do not have permission to perform this action',
      });
    }
    next();
  };
};
