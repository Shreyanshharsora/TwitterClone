const express = require('express');
const app = express();
const port = 3000;
const db = require('mongoose');
const dotenv = require('dotenv');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

// Database Connection
db.connect(
    process.env.DB_CONN, {
        useNewUrlParser: true
    },
    () => console.log('Successfully Connected to Database')
);


//Json Middlewares
app.use(express.json());

//Routes Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.listen(port, () => console.log('Server Up and Running!'))
