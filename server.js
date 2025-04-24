// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const authMiddleware = require('./middleware/authMiddleware');
const logMiddleware = require('./middleware/logMiddleware'); // Подключаем логирование

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Используем middleware для логирования
app.use(logMiddleware);

// Используем маршруты
app.use('/api', authRoutes);
app.use('/api/menu', menuRoutes);  // Маршрут для работы с меню

app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ message: `Привет, пользователь с ID ${req.user.id}` });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
