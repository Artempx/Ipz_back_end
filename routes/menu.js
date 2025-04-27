const express=require('express');
const router=express.Router();
const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');
router.get('/', async (req, res) => {
    try {
      const menu = await MenuItem.getAllMenuItems();
      res.json(menu);
    } catch (err) {
      console.error('Ошибка при получении меню:', err.message);
      console.error(err.stack); 
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
  
  
router.post('/', async (req, res) => {
    const { id,name, image, price,orderName,quantity,reviews,menu,nameHighlight } = req.body;
  
    try {
      await MenuItem.addMenuItem(id,menu,name,orderName,nameHighlight,image,price,reviews,quantity);

      res.status(201).json({ message: 'Блюдо добавлено' });
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при сохранении блюда' });
    }
  });

module.exports = router;