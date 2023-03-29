// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello Squirrel');
});

// Start Server

//tells the app to log a message on port 3000. Once we start the server, we should see that message in the terminal 
app.listen(3000, () => {
    console.log('Gif Search listening on port localhost:3000!');
});