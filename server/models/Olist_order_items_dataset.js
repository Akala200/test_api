/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';


const { Schema } = mongoose;

const Olist_order_items_datasetSchema = new Schema(
  {
    order_id: { type: String, required: true },
    order_item_id: { type: Number, required: true },
    product_id: { type: String, required: true },
    seller_id: { type: String, required: true },
    shipping_limit_date: { type: Date, required: true },
    price: { type: Number, required: true },
    freight_value: { type: Number, required: true },

  },
);


const Olist_order_items_dataset = mongoose.model('Olist_order_items_dataset', Olist_order_items_datasetSchema);

export default Olist_order_items_dataset;
