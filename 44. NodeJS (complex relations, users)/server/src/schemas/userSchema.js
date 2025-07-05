const { Schema } = require("mongoose");
const mongoose = require('mongoose');
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    addresses: [
      {
        label: { type: String, default: "Home" }, // e.g. Home, Work
        recipientName: String,
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
        isDefault: { type: Boolean, default: false },
      },
    ],
    profileImage: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg",
    },
    public_id: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    isBanned: {
      type:Boolean,
      default:false
    },
    banUntil: {
      type: Date,
      default: null
    },
    role: {
      type: String,
      enum: ["client", "admin"],
      default: "client", // ['user', 'admin']
    },
    emailVerified: { type: Boolean, default: false },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

module.exports = userSchema;
