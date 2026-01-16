const joi = require('joi');

const createStorageSchema = joi.object({
    name: joi.string().required(),
    location: joi.string().required(),
    capacity: joi.number().required()
});

module.exports = {
    createStorageSchema
};