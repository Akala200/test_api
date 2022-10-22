/* eslint-disable camelcase */
import Olist_sellers_dataset from '../models/Olist_sellers_dataset';

const auth = async (req, res, next) => {
  const authheader = req.headers.authorization;

  if (!authheader) {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }

  const auth_new = new Buffer.from(authheader.split(' ')[1],
    'base64').toString().split(':');
  const user = auth_new[0];
  const pass = auth_new[1];
  const sellert = await Olist_sellers_dataset.findOne({ seller_id: user });

  if (!sellert) {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }

  if (user === sellert.seller_id && pass === sellert.seller_zip_code_prefix) {
    // If Authorized user
    req.user = sellert;

    next();
  } else {
    const err = new Error('You are not authenticated!');
    res.setHeader('WWW-Authenticate', 'Basic');
    err.status = 401;
    return next(err);
  }
};
export default auth;
