const logger = require('./logger');  // Підключаємо logger (winston)

function logMiddleware(req, res, next) {
  // Логування вхідного запиту
  const logMessage = {
    method: req.method,        // Метод запиту (GET, POST, тощо)
    url: req.originalUrl,      // URL запиту
    body: req.body,            // Тіло запиту
    timestamp: new Date().toISOString(),  // Час запиту
  };

  // Логування запиту
  logger.info(`Запит: ${JSON.stringify(logMessage)}`);

  // Зберігаємо референс на оригінальний метод 'send'
  const originalSend = res.send;

  // Переоприділяємо метод 'send' для логування відповіді
  res.send = function (body) {
    // Логування відповіді
    const responseLog = {
      statusCode: res.statusCode,  // Статус код відповіді
      body: body,                  // Тіло відповіді
      timestamp: new Date().toISOString(),  // Час відповіді
    };

    logger.info(`Відповідь: ${JSON.stringify(responseLog)}`);

    // Викликаємо оригінальний метод 'send' для відправки відповіді
    originalSend.call(this, body);
  };

  next();  // Передаємо запит наступному middleware або маршруту
}

module.exports = logMiddleware;
