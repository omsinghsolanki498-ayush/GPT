require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
connectDB();

const app = express();


// CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


// MIDDLEWARES
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


// ROUTES
app.use("/api/auth", require("./routes/AuthRoutes"));


// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});


// SERVER
app.listen(3002, () => {
  console.log("Server running on port 3002");
});