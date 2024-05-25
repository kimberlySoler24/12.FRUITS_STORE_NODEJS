const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const orderRouter = require('./routers/orderRouter');
const fruitRouter = require('./routers/fruitRouter');
dotenv.config
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library API',
            version: '1.0.0',
            description: 'Fruits Store'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./routers/fruitRouter.js']
}

const specs = swaggerJsDoc(options)

app.use('/api/v1/fruits', fruitRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port, () => {
    console.log("Port ==> ", port);
});