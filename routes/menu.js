const express=require('express');
const router=express.Router();
const MenuItem = require('../models/MenuItem');
router.get('/', async (req, res) => {
    try {
      const menu = await MenuItem.getAllMenuItems();
      res.json(menu);
    } catch (err) {
      console.error('🔥 Ошибка при получении меню:', err.message);
      console.error(err.stack); // Печатает весь стек ошибки
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
  
  
router.post('/', async (req, res) => {
    const { title, image, price } = req.body;
  
    try {
      await MenuItem.addMenuItem(title, image, price); // Вызов метода модели
      res.status(201).json({ message: 'Блюдо добавлено' });
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при сохранении блюда' });
    }
  });
module.exports = router;