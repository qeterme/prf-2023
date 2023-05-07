import { Schema, InferSchemaType, model } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    unique: [true, 'Product name is already taken'],
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9]+/.test(v);
      }
    }
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    validate: {
      validator: function (v: string) {
        return /[a-zA-Z0-9]+/.test(v);
      }
    }
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Product price must be a positive number']
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

type Product = InferSchemaType<typeof productSchema>;

export default model('Product', productSchema);