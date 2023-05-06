// write an default express app 
// that serves the static files in the public folder
// and listens on port 3000
// use the express.static middleware

const path = require('path');

import express from 'express';
import mongoose from 'mongoose';
import expressSession from 'express-session';
import cors from 'cors';

import passport from './passport';

const app = express();

// connect to mongo using the dotenv file
if (process.env.MONGODB == undefined) {
  console.log('Please create a .env file with the MONGODB variable');
  process.exit();
}
mongoose.connect(process.env.MONGODB, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// schemas
import './models/Product';
import './models/User';
import './models/Order';

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
  secret: 'mySecretKey', resave: true
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
};

// routes
import {authRoutes} from './routes/AuthRoutes';
import productRoutes from './routes/ProductRoutes';
import userRoutes from './routes/UserRoutes';

app.use('/api/auth', cors(corsOptions), authRoutes);
app.use('/api/products', cors(corsOptions), productRoutes);
app.use('/api/users', cors(corsOptions), userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

// log every request
app.use((req, res, next) => {
  console.log(req.method, req.url, req.body);
  next();
});

app.listen(3000, () => console.log('Listening on port 3000'));