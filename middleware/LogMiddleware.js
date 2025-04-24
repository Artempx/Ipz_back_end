// middleware/logMiddleware.js
const logger = require('./logger');  // Импортируем правильно настроенный логгер

function logMiddleware(req, res, next) {
  const logMessage = {
    method: req.method,
    url: req.originalUrl,
    body: req.body,  // Логируем тело запроса
    timestamp: new Date().toISOString()
  };

  logger.info(logMessage);  // Логируем сообщение с использованием метода info

  next();
}

module.exports = logMiddleware;
