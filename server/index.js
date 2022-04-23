const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.send('Server Running');
});

app.listen(port, () => {
  console.log(`Server Running at Port: ${port}`);
});
