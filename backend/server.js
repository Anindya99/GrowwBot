const express = require("express");
const mongoose = require("mongoose");
const { db_link } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const productRoutes = require("./routes/productRoutes");

const app = express();
//body parser middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

mongoose
    .connect(db_link, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Mongoose connected..."))
    .catch((err) => console.log(err));

app.use("/api/Oauth", require("./routes/Oauth.route.js"));
app.use(productRoutes);

//Invalid route's error handling
app.use("*", function (req, res) {
    res.status(404).json({ msg: "PAGE NOT FOUND" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at port ${port}`));
