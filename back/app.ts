// write an default express app
// that serves the static files in the public folder
// and listens on port 3000
// use the express.static middleware

const path = require("path");

import express from "express";
import mongoose from "mongoose";
import expressSession from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";

import passport from './passport';

const app = express();

// connect to mongo using the dotenv file
if (process.env.MONGODB == undefined) {
  console.log("Please create a .env file with the MONGODB variable");
  process.exit();
}
mongoose
  .connect(process.env.MONGODB, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// schemas
import "./models/Product";
import "./models/User";
import "./models/Order";

app.use(cors());

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: "mySecretKey",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
import { authRoutes } from "./routes/AuthRoutes";
import productRoutes from "./routes/ProductRoutes";
import userRoutes from "./routes/UserRoutes";
import orderRoutes from "./routes/OrderRoutes";
import User from "./models/User";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use("/api/auth", cors(corsOptions), authRoutes);
app.use("/api/products", cors(corsOptions), productRoutes);
app.use("/api/users", cors(corsOptions), userRoutes);
app.use("/api/orders", cors(corsOptions), orderRoutes);

app.use(express.static(path.join(__dirname, "public")));
app.use(/^((?!\/api\/).)*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// log every request
app.use((req, res, next) => {
  console.log(req.method, req.url, req.body);
  next();
});

app.listen(3000, () => console.log("Listening on port 3000"));
