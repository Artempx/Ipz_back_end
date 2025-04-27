const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST: додати нове замовлення
router.post('/', async (req, res) => {
  const { id, items, price } = req.body;

  try {
    await Order.addOrder(id, items, price);
    res.status(201).json({ message: 'Замовлення додано' });
  } catch (err) {
    res.status(500).json({ message: 'Помилка при збереженні замовлення' });
  }
});

module.exports = router;
