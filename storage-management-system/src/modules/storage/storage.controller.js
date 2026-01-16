const storageService = require('./storage.service');

const { createStorageSchema } = require("./storage.validation");


const createStorage = async (req, res) => {
    
    const { error } = createStorageSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const storage = await storageService.createStorage(req.body);
        res.status(201).json(storage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getStorages = async (req, res) => {
    try {
        const storages = await storageService.getStorages();
        res.status(200).json(storages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStorage = async (req, res) => {
    try {
        const storage = await storageService.updateStorage(req.params.id, req.body);
        res.status(200).json(storage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteStorage = async (req, res) => {
    try {
        await storageService.deleteStorage(req.params.id);
        res.status(200).json({ message: 'Storage deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createStorage,
    getStorages,
    updateStorage,
    deleteStorage
};