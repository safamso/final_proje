import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
     oldPrice: {
      type: Number,
      required: true,
    },
     discount: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "Vegetable",
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model(
  "Product",
  productSchema
);