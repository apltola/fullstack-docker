const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/status', (req, res) => {
  res.send(`hellou hellou server is online!`)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server container up at 5000!');
})