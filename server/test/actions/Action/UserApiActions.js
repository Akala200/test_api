/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-global-assign */
/* eslint-disable no-unused-vars */

import UrlMapper from '../../../../UrlMapper';
import baseActions from '../common/BaseActions';


const URL = 'http://localhost:3094/api';

/** This createUser will help us to create a user with user-id and user name as a request body
        this request body can be changed as per your project api * */


exports.getOrderList = async function () {
  console.log('today', URL + UrlMapper.GETORDERS);
  const res = await baseActions.sendGETRequest(URL, UrlMapper.GETORDERS);
  return res;
};

exports.getOrder = async function (id) {
  console.log('today', URL + UrlMapper.GETORDERS);
  const res = await baseActions.sendGETRequest(URL, `${UrlMapper.GETORDERS}/${id}`);
  return res;
};

exports.updateOrder = async function (freight_value, order_id, order_item_id, price, product_id, seller_id, shipping_limit_date) {
  const reqBody = {

    freight_value, order_id, order_item_id, price, product_id, shipping_limit_date
  };
  console.log('today', URL + UrlMapper.UPDATEORDER);
  const res = await baseActions.sendPUTRequest(URL, `${UrlMapper.UPDATEORDER}/${seller_id}`, reqBody);
  return res;
};


exports.updateSeller = async function (seller_state, seller_city) {
  const reqBody = {
    seller_state, seller_city
  };
  console.log('today', URL + UrlMapper.UPDATESELLER);
  const res = await baseActions.sendPUTRequest(URL, UrlMapper.UPDATESELLER, reqBody);
  return res;
};


exports.deleteOrder = async function (id_to_delete) {
  console.log('today', URL + UrlMapper.DELETEORDER);
  const res = await baseActions.sendDELETERequest(URL, `${UrlMapper.DELETEORDER}/${id_to_delete}`);
  return res;
};
