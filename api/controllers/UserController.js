/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    viewall: function (req, res) {
        User.find().then(function (user) {
            res.json(user);
        });
    }
};