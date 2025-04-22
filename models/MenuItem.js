const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
});

MenuItemSchema.statics.getAllMenuItems = async function () {
  return await this.find();
};

MenuItemSchema.statics.addMenuItem = async function (title, image, price) {
  const item = new this({ title, image, price });
  return await item.save();
};


module.exports = mongoose.model('MenuItem', MenuItemSchema);
