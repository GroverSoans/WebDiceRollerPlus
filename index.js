const express = require('express');
const app = express();

// Accessing the environment variable
const myVariable = process.env.ENVIRONMENT; // Replace with your variable name

// A simple route to display the environment variable
app.get('/', (req, res) => {
  res.send(`The value of the environment variable is: ${myVariable}`);
});

const PORT = process.env.PORT || 3000; // Azure Web Apps uses PORT environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

