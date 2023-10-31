"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Use the JSON body parser middleware
app.use(bodyParser.json());
app.post('/api/data', (req, res) => {
    // The request body has already been parsed by body-parser
    const requestData = req.body;
    res.json({ message: 'Data received', data: requestData });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
