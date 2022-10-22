/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-concat */
/* eslint-disable max-len */ /* eslint-disable no-unused-vars */
import { expect } from 'chai';

import StatusCode from '../../../../StatusCode';

const supertest = require('supertest');
const Action = require('../../actions/Action/UserApiActions');
const order_data = require('../../testData/ProductInfo').OrderData;
const sellerData = require('../../testData/ProductInfo').SellerData;

describe('Performing Operations on Order', () => {
  const {
    freight_value, order_id, order_item_id, price, product_id, seller_id, shipping_limit_date
  } = order_data.ORDER_DETAILS;

  const { seller_state, seller_city } = sellerData.Seller_DETAILS;
  let id_to_delete;

  describe('GET Request: Get Orders', () => {
    it('Getting order list', async () => {
      const res = await Action.getOrderList();
      id_to_delete = res.body.data.data[0].seller_id;
      expect(res.status).to.equal(StatusCode.OK);
    });
  });

  describe('GET Request: Get A Order', () => {
    it('Getting a order ', async () => {
      const res = await Action.getOrder(seller_id);
      expect(res.status).to.equal(StatusCode.OK);
    });
  });

  describe('Update Request: Update Order', () => {
    it('Getting order list', async () => {
      const res = await Action.updateOrder(freight_value, order_id, order_item_id, price, product_id, seller_id, shipping_limit_date);
      expect(res.status).to.equal(StatusCode.OK);
    });
  });

  describe('Update Request: Update Seller', () => {
    it('Getting order list', async () => {
      const res = await Action.updateSeller(seller_state, seller_city);
      expect(res.status).to.equal(StatusCode.OK);
    });
  });

  describe('Delete Request: Delete Order', () => {
    it('Deleting order', async () => {
      const res = await Action.deleteOrder(id_to_delete);
      expect(res.status).to.equal(StatusCode.OK);
    });
  });
});
