const router = require("express").Router();
import mongoose from "mongoose";
const Order = mongoose.model("Order");
const Product = mongoose.model("Product");
const User = mongoose.model("User");

// GET /api/orders
router.get("/", (req: any, res: any) => {
  // if (req.isAuthenticated() && req.user.isAdmin) {
  Order.find()
    .populate("user")
    .populate("product")
    .sort({ created_at: -1 })
    .then((orders: any) => res.json(orders))
    .catch((err: any) => res.json(err));
  // } else if (req.isAuthenticated()) {
  //   Order.find({ user: req.user._id })
  //     .then((orders: any) => res.json(orders))
  //     .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

// GET /api/orders/my
router.post("/my", (req: any, res: any) => {
  Order.find({ user: req.body._id })
    .populate("user")
    .populate("product")
    .sort({ created_at: -1 })
    .then((orders: any) => res.json(orders))
    .catch((err: any) => res.json(err));
});

// GET /api/orders/:id
router.get("/:id", (req: any, res: any) => {
  Order.findById(req.params.id)
    .populate("user")
    .populate("product")
    .then((order: any) => {
      // if (
      //   req.isAuthenticated() &&
      //   (req.user.isAdmin || order.user == req.user._id)
      // ) {
      res.json(order);
      // } else {
      //   res.sendStatus(401);
      // }
    });
});

// POST /api/orders
router.post("/", (req: any, res: any) => {
  // if (req.isAuthenticated()) {
  Order.create(req.body)
    .then((order: any) => res.json(order))
    .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

// DELETE /api/orders/:id
router.delete("/:id", (req: any, res: any) => {
  // if (req.isAuthenticated() && req.user.isAdmin) {
  //   Order.findByIdAndDelete(req.params.id)
  //     .then((order: any) => res.json(order))
  //     .catch((err: any) => res.json(err));
  // } else if (req.isAuthenticated()) {
  //   Order.findById(req.params.id)
  //     .then((order: any) => {
  //       if (order.user == req.user._id) {
  Order.findByIdAndDelete(req.params.id)
    .then((order: any) => res.json(order))
    .catch((err: any) => res.json(err));
  //       }
  //     })
  //     .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

export default router;
