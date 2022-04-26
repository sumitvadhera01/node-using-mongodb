import express from 'express';
//import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/productsdb',
{   useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => { 
    console.log('MongoDB Connected...')
}).catch(err => {
    console.log(err);
});

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
