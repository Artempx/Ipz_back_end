const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key';

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Нет токена' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('Decoded Token:', decoded);  // Выводим содержимое токена в консоль
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Неверный токен' });
  }
}

module.exports = authMiddleware;
