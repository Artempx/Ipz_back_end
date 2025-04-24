// middleware/logger.js
const winston = require('winston');

// Создаем логгер с настройками
const logger = winston.createLogger({
  level: 'info',  // Уровень логирования
  format: winston.format.json(),  // Формат сообщений
  transports: [
    new winston.transports.File({ filename: 'logs/server.log' })  // Логируем в файл
  ]
});

// Экспортируем логгер
module.exports = logger;
