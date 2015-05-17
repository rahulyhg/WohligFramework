/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true
        },
        email: {
            type: "email",
            unique: true,
            required: true
        },
        contact: {
            type: "string"
        },
        gender: {
            type: 'string',
            enum: ['male', 'female']
        },
        medals: {
            collection:"medal",
            via:"owner"
        }

    }
};