import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {type:String, required: true},
    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    email: {type:String, required: true},
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true },
        country: { type: String, required: true },
    },
    phonenumber: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    orderStatus: {
      type: String,
      enum: ['pending', 'processing', 'shipped','out of delivery', 'delivered', 'cancelled'],
      default: 'pending',
    },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
            name: { type: String, required: true },
            size: { type: String, required: true },
            quantity: { type: Number, required: true },
            productPrice: { type: Number, required: true },
            image: { type: String, required: true },

        }
    ],
}, { timestamps: true, minimize:false })

export const Order =  mongoose.model('Order', orderSchema);