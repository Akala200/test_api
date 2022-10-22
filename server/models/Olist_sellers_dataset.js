/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';


const { Schema } = mongoose;

const Olist_sellers_datasetSchema = new Schema(
  {
    seller_id: {
      type: String,
    },
    seller_zip_code_prefix: {
      type: String,
    },
    seller_city: {
      type: String,
    },
    seller_state: {
      type: String,
    },
  },
);


const Olist_sellers_dataset = mongoose.model('Olist_sellers_dataset', Olist_sellers_datasetSchema);

export default Olist_sellers_dataset;
