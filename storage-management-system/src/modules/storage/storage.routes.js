const express = require('express');
const router = express.Router();

const {
    createStorage,
    getStorages,
    updateStorage,
    deleteStorage
} = require('./storage.controller');

router.post('/', createStorage);
router.get('/', getStorages);
router.put('/:id', updateStorage);
router.delete('/:id', deleteStorage);

module.exports = router;