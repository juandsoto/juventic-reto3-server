const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const app = express();

config();

const port = process.env.PORT || 4000; // <== You can change the port

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
