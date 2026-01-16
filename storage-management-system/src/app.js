const express = require('express');
const cors = require('cors');

const storageRoutes = require('./modules/storage/storage.routes');
const ItemRoutes = require('./modules/item/item.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/storages', storageRoutes);
app.use('/api/items', ItemRoutes);

app.get('/', (req, res) => {
    res.send('Storage Management System API is running');
});

module.exports = app;