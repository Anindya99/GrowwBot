const express = require("express");
const mongoose = require("mongoose");
const { db_link } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/productRoutes");

const app = express();
//body parser middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

mongoose
  .connect(db_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose connected..."))
  .catch((err) => console.log(err));


app.use("/api/Oauth", require("./routes/Oauth.route.js"));
app.use("/api/verify", require("./routes/verifyJWT.route.js"));
app.use("/api/questions", require("./routes/questions.route.js"));
app.use("/api/users", require("./routes/users.route.js"));
app.use("/api/v1/invest", require("./routes/investment.route.js"));
app.use(productRoutes);

//Invalid route's error handling
app.use("*", function (req, res) {
  res.status(404).json({ msg: "PAGE NOT FOUND" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at port ${port}`));

//git subtree push --prefix backend heroku master