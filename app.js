import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { notFound, errorHandler } from './server/middlewares/errorhandlers';
import traceLogger from './server/logger/tracelogger';
import routes from './server/routes';
import config from './server/config';


// initialize express
const app = express();

// for request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));


// connect to mongodb
// eslint-disable-next-line max-len
const mongoURL = config.DATABASE_URL;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, () => {
  process.stdout.write('connected to mongodb');
});

app.get('/', (req, res) => {
  res.json({ massage: 'Welcome to Gvest Admin Api' });
});

// Routes
app.use('/api', routes);

app.use('*', notFound);
app.use(errorHandler);

process.on('unhandledRejection', (reason) => {
  traceLogger(reason);
});

process.on('uncaughtException', (reason) => {
  traceLogger(reason);
});

const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
  process.stdout.write(`app is listening on port ${PORT}`);
});

export default app;
