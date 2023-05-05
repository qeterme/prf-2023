import express, { Router } from "express";
import passport from "../passport";
import User from "../models/User";

export const authRoutes: Router = express.Router();

// POST /api/auth/login
authRoutes.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

// POST /api/auth/logout
authRoutes.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    res.status(200);
  });
  // req.logout();
});

// POST /api/auth/register
authRoutes.post("/register", (req, res) => {
  console.log(req.body);
  User.register(
    new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    })
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// export default router;