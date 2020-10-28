const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/status', (req, res) => {
  res.send(`server is online! node_env = ${process.env.NODE_ENV}`)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server container up at 5000!');
})