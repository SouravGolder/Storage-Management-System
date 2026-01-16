const Storage = require('./storage.model');

const createStorage = async (data) => {
  const storage = await Storage.create(data);
  return storage;
};
const getStorages = async (id) => {
    return await Storage.find();
};

const updateStorage = async (id, data) => {
    return await Storage.findByIdAndUpdate(id, data, { new: true });
};

const deleteStorage = async (id) => {
    return await Storage.findByIdAndDelete(id);
};

module.exports = {
    createStorage,
    getStorages,
    updateStorage,
    deleteStorage
};