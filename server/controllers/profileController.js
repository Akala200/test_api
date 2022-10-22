/* eslint-disable no-underscore-dangle */
/* eslint-disable require-jsdoc */
/* eslint-disable camelcase */

import tracelogger from '../logger/tracelogger';
import responses from '../utils/responses';
import Olist_order_items_dataset from '../models/Olist_order_items_dataset';


/**
 * @description Defines the actions for the profile endpoints
 * @class profileController
 */

class profileController {
  /**
   *@description Update seller Profile
   *@static
   *@param  {Object} req - request
   *@param  {object} res - response
   *@returns {object} - status code, message and response
   *@memberof profileController
   */

  static async updateProfile(req, res,) {
    const id = req.user.seller_id;
    console.log(id);
    try {
      const user = await Olist_order_items_dataset.findOne({ seller_id: id });

      if (!user) {
        return res
          .status(400)
          .json(responses.error(400, 'Sorry, order does not exist'));
      }

      const updatedUser = await Olist_order_items_dataset.findOneAndUpdate(
        { _id: user._id },
        req.body,
        { new: true }
      );

      if (updatedUser) {
        return res
          .status(200)
          .json(responses.success(200, 'Seller details has been updated', updatedUser));
      }
    } catch (error) {
      tracelogger(error);
      return res.status(500).json(responses.error(500, error));
    }
  }
}


export default profileController;
