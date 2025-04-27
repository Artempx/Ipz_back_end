const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const authMiddleware = require('./middleware/authMiddleware');
const logMiddleware = require('./middleware/logMiddleware'); // Підключаємо logMiddleware
const ordersRoutes = require('./routes/orders');

const app = express();
app.use(cors());
app.use(express.json());

// Підключення до MongoDB
mongoose.connect('mongodb+srv://vadimog25:fT6E7KjIHbnVW2HO@freshandhot.otdm1g9.mongodb.net/freshandhot');

// Використовуємо logMiddleware для логування
app.use(logMiddleware);

app.use('/api', authRoutes);
app.use('/api/menu', menuRoutes);

app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ message: `Привіт, користувач з email ${req.user.email}` });
});


app.use('/api/orders', ordersRoutes);

app.listen(3000, () => {
  console.log('Сервер запущений на http://localhost:3000');
});
