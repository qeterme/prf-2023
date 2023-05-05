import { Schema, InferSchemaType, model } from 'mongoose';

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product is required']
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

type Order = InferSchemaType<typeof orderSchema>;

export default model('Order', orderSchema);