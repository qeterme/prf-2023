// make CRUD and login, logout, register for user

// Path: back/routes/user.route.js

const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

const passport = require('passport');

// GET /api/users
router.get('/', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    User.find()
      .then((users: any) => res.json(users))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

// GET /api/users/:id
router.get('/:id', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; params: { id: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    User.findById(req.params.id)
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

// POST /api/users
router.post('/', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; body: any; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    User.create(req.body)
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

// PATCH /api/users/:id
router.patch('/:id', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; params: { id: any; }; body: { username: any; password: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    User.findById(req.params.id)
      .then((user: { username: any; password: any; save: () => any; }) => {
        user.username = req.body.username;
        user.password = req.body.password;
        return user.save();
      }
      )
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

// DELETE /api/users/:id
router.delete('/:id', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; params: { id: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    User.findByIdAndDelete(req.params.id)
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

export default router;