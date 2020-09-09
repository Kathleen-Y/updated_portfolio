const mongoose = require("mongoose");

//connect to the mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/updated_portfolio",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


