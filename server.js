const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// A simple route to render the HTML with the environment variable
app.get('/', (req, res) => {
  const myVariable = process.env.ENVIRONMENT || 'Local'; // Get the environment variable
  res.render('index', { myVariable }); // Pass the variable to the EJS template
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

