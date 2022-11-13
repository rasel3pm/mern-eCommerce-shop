const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://kibria:kibria@cluster0.sufiz8b.mongodb.net/superShop?retryWrites=true&w=majority"
      )
      .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
      });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
