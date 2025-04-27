const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  price: { type: Number, required: true }
});

// метод для збереження замовлення
OrdersSchema.statics.addOrder = async function(id, items, price) {
  const order = new this({ id, items, price });
  return await order.save();
};

module.exports = mongoose.model('Order', OrdersSchema);
