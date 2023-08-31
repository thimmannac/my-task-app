const express = require('express');
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { connectDB } = require('./api/utils/connect');
const tasks = require('./api/routes/task');
const notFound = require('./api/middleware/notFound');
const errorHandlerMiddleware = require('./api/middleware/errorHandler')

// middleware
app.use(express.json());
app.use(express.static('./api/public'));

// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)

app.use((req, res) => {
    res.status(200).json({ message: 'welcome to express' })
})
const start = async () => {
    try {
        connectDB()
        app.listen(PORT, () => {
            console.log('SERVER HAS STARTED');
        })

    } catch (error) {
        console.log(error);
    }
}

start()