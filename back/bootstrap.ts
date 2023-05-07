import mongoose from "mongoose";
const Product = mongoose.model("Product");
const User = mongoose.model("User");

async function checkAdminExists() {
  try {
    const user = await User.findOne({ username: "admin" });
    if (!user) {
      const admin = new User({
        username: "admin",
        password: "123456",
        email: "admin@grade.shop",
        role: "admin",
      });
      await admin.save();
    }
  } catch (err) {
    console.log(err);
  }
}

async function checkProductsExists() {
  try {
    const product = await Product.findOne();
    if (!product) {
      const discreteMaths = new Product({
        name: "Discrete Mathematics",
        description: "An excellent grade, 2 credits",
        price: 25000,
      });
      await discreteMaths.save();
    }
  } catch (err) {
    console.log(err);
  }
}

export async function bootstrap() {
  await checkAdminExists();
  await checkProductsExists();
}