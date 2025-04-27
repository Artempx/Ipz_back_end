const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  menu: { type: [String], required: true },
  name: { type: String, required: true },
  orderName: { type: String, required: true },
  nameHighlight: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  reviews: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

MenuItemSchema.statics.getAllMenuItems = async function () {
  return await this.find();
};

MenuItemSchema.statics.addMenuItem = async function (
  id,
  menu,
  name,
  orderName,
  nameHighlight,
  image,
  price,
  reviews,
  quantity
) {
  const item = new this({
    id,
    menu,
    name,
    orderName,
    nameHighlight,
    image,
    price,
    reviews,
    quantity,
  });
  return await item.save();
};

module.exports = mongoose.model("MenuItem", MenuItemSchema);