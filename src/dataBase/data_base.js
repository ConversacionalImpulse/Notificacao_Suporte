const mongoose = require("mongoose");

exports.connectToDB = () => {
    mongoose.connect(
        process.env.DATABASE_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log("MongoDB Atlas CONECTADO!");
      })
      .catch((e) => console.log(e));
  };