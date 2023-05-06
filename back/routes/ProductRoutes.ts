const router = require('express').Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// GET /api/products
router.get('/', (req: any, res: { json: (arg0: any) => any; }) => {
  Product.find()
    .then((products: any) => res.json(products))
    .catch((err: any) => res.json(err));
});

// GET /api/random 4
router.get('/random', (req: any, res: { json: (arg0: any) => any; }) => {
  Product.aggregate([{ $sample: { size: 12 } }])
    .then((products: any) => res.json(products))
    .catch((err: any) => res.json(err));
});

// GET /api/products/:id
router.get('/:id', (req: { params: { id: any; }; }, res: { json: (arg0: any) => any; }) => {
  Product.findById(req.params.id)
    .then((product: any) => res.json(product))
    .catch((err: any) => res.json(err));
});

// POST /api/products
router.post('/', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; body: any; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    Product.create(req.body)
      .then((product: any) => res.json(product))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

// PATCH /api/products/:id
router.patch('/:id', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; params: { id: any; }; body: { name: any; description: any; price: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    Product.findById(req.params.id)
      .then((product: { name: any; description: any; price: any; save: () => any; }) => {
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        return product.save();
      }
      )
      .then((product: any) => res.json(product))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

// DELETE /api/products/:id
router.delete('/:id', (req: { isAuthenticated: () => any; user: { isAdmin: any; }; params: { id: any; }; }, res: { json: (arg0: any) => any; sendStatus: (arg0: number) => void; }) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    Product.findByIdAndDelete(req.params.id)
      .then((product: any) => res.json(product))
      .catch((err: any) => res.json(err));
  } else {
    res.sendStatus(401);
  }
});

export default router;
