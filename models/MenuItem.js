const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  ordername:{type:String,required:true},
  id:{type:Number,required:true},
  quantity:{type:Number,required:true},
  reviews:{type:Number,required:true}
});

MenuItemSchema.statics.getAllMenuItems = async function () {
  return await this.find();
};

MenuItemSchema.statics.addMenuItem = async function (name, image, price,id,ordername,quantity,reviews) {
  const item = new this({ name, image, price,id,ordername,quantity,reviews });
  return await item.save();
};


module.exports = mongoose.model('MenuItem', MenuItemSchema);
