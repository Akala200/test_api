/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */

import tracelogger from '../logger/tracelogger';
import responses from '../utils/responses';
import Olist_order_items_dataset from '../models/Olist_order_items_dataset';


class aggregateController {
  /**
   *@description Get Order item
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof aggregateController
   */

  static async orders(req, res,) {
    const skip = req.query.skip === undefined ? 1 : parseInt(req.query.skip);
    const limit = req.query.limit === undefined ? 40 : parseInt(req.query.limit);
    const { key } = req.query;


    try {
      if (key) {
        const orders = await Olist_order_items_dataset.find({ price: { $lte: `${key}` } }).skip(skip).limit(limit);
        const responseObject = {
          data: orders,
          total: orders.length,
          limit,
          offset: skip
        };
        return res
          .status(200)
          .json(responses.success(200, 'Order Items retrieved', responseObject));
      } else {
        if (!limit) {
          return res
            .status(400)
            .json(responses.success(400, 'Order Items limit is needed'));
        }
        const orders = await Olist_order_items_dataset.find().skip(skip).limit(limit);
        const responseObject = {
          data: orders,
          total: orders.length,
          limit,
          offset: skip
        };
        return res
          .status(200)
          .json(responses.success(200, 'Order Items retrieved', responseObject));
      }
    } catch (error) {
      tracelogger(error);
      return res.status(500).json(responses.error(500, error));
    }
  }


  /**
   *@description Delete order item by ID
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof aggregateController
   */

  static async orderById(req, res,) {
    const { id } = req.params;
    try {
      await Olist_order_items_dataset.findOneAndDelete({ order_id: id });

      return res
        .status(200)
        .json(responses.success(200, 'Order Items deleted susccessfully'));
    } catch (error) {
      tracelogger(error);
      return res.status(500).json(responses.error(500, error));
    }
  }

  /**
   *@description Update sorder item by ID
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof profileController
   */

  static async updateOrder(req, res,) {
    const { id } = req.params;

    try {
      const user = await Olist_order_items_dataset.findOne({ seller_id: id });

      if (!user) {
        return res
          .status(400)
          .json(responses.error(400, 'Sorry, order does not exist'));
      }

      const updatedOrder = await Olist_order_items_dataset.findOneAndUpdate(
        { seller_id: id },
        req.body,
        { new: true }
      );

      if (updatedOrder) {
        return res
          .status(200)
          .json(responses.success(200, 'Seller details has been updated', updatedOrder));
      }
    } catch (error) {
      tracelogger(error);
      return res.status(500).json(responses.error(500, error));
    }
  }


  /**
   *@description Delete sorder item by ID
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof profileController
   */

  static async deleteOrder(req, res,) {
    const { id } = req.params;

    try {
      const user = await Olist_order_items_dataset.findOne({ seller_id: id });

      if (!user) {
        return res
          .status(400)
          .json(responses.error(400, 'Sorry, order does not exist'));
      }

      await Olist_order_items_dataset.findOneAndDelete({ seller_id: id });

      return res
        .status(200)
        .json(responses.success(200, 'Seller details has been deleted'));
    } catch (error) {
      tracelogger(error);
      return res.status(500).json(responses.error(500, error));
    }
  }
}


export default aggregateController;
