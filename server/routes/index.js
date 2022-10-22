import express from 'express';
import aggregateRoutes from './aggregate';
import sellerRoutes from './seller';


const app = express();

app.use('/aggregate', aggregateRoutes);
app.use('/seller', sellerRoutes);

export default app;
