const router = require('express').Router();
import mongoose from 'mongoose';
const User = mongoose.model('User');

// GET /api/users
router.get('/', (req: any, res: any) => {
  // console.log(req.user)
  // if (req.isAuthenticated() && req.user.isAdmin) {
    User.find()
      .then((users: any) => res.json(users))
      .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

// GET /api/users/:id
router.get('/:id', (req: any, res: any) => {
  // if (req.isAuthenticated() && req.user.isAdmin) {
    User.findById(req.params.id)
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

// POST /api/users
router.post('/', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; body: any; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  // if (req.isAuthenticated() && req.user.isAdmin) {
    User.create(req.body)
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

// PATCH /api/users/:id
router.patch('/:id', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; params: { id: any; }; body: { username: any; password: any; email: any; role: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  // if (req.isAuthenticated() && req.user.isAdmin) {
    User.findById(req.params.id)
      .then((user: any) => {
        user.username = req.body.username;
        user.email = req.body.email;
        user.role = req.body.role
        return user.save();
      }
      )
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

// DELETE /api/users/:id
router.delete('/:id', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; params: { id: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  // if (req.isAuthenticated() && req.user.isAdmin) {
    User.findByIdAndDelete(req.params.id)
      .then((user: any) => res.json(user))
      .catch((err: any) => res.json(err));
  // } else {
  //   res.sendStatus(401);
  // }
});

export default router;