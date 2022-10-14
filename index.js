const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv/config');
const preDbService = require('./services/preDbService');

const bookRoutes = require('./routes/bookRoutes');

//Pre database connection
preDbService.start();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/books", bookRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));