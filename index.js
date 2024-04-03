import swaggerUi from 'swagger-ui-express'
import swagger from './docs/swagger.json'assert { type: 'json' };
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import configuration from './configs/index.js';
import mongoose from 'mongoose';
import cors from 'cors';

import notFound from './errors/notfound.js';
import internalServerError from './errors/errhandler.js';
import contactRoutes from './routes/contact.routes.js'

app.use(express.json());
app.use(cors());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));
app.use('/',contactRoutes)
app.use(notFound);
app.use(internalServerError);
mongoose.connect(configuration.mongoURI)
.then(() => {
    app.listen(configuration.port, ()=> {
        console.log("listening on port "+configuration.port);
    });
})
.catch(err => {
    console.log(err);
});