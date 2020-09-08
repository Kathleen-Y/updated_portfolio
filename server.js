const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/updated_portfolio", {
  useNewUrlParser: true,
  useFindAndModify: false
});


