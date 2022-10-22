/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';


const { Schema } = mongoose;

const Olist_products_datasetSchema = new Schema(
  {
    product_id: {
      type: String,
    },
    product_category_name: {
      type: String,
    },
    product_name_lenght: {
      type: Number,
    },
    product_photos_qty: {
      type: Number,
    },
    product_weight_g: {
      type: Number,
    },
    product_length_cm: {
      type: Number,
    },
    product_height_cm: {
      type: Number,
    },
    product_width_cm: {
      type: Number,
    },
    product_description_lenght: {
      type: Number,
    },

  },
);


const Olist_products_dataset = mongoose.model('Olist_products_dataset', Olist_products_datasetSchema);

export default Olist_products_dataset;
