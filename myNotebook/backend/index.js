const connectToMongo = require('./db');
const express = require("express");
var cors = require("cors");

// Connect to MongoDB
connectToMongo();

// Create Express app
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

// Define authentication routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start the server
app.listen(port, () => {
  console.log(`iNotebook backend listening at ${port}`);
});
