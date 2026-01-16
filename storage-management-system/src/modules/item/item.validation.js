const joi = require('joi');

const createItemSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    quantity: joi.number().min(0),
    storageId: joi.string().required()
});

module.exports = {
    createItemSchema
};