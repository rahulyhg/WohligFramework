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
    },
    check: function (req, res) {
        res.json(req.param("name"));
    },
    file: function (req, res) {
        req.file('file').upload(function (err, uploadedFiles) {
            console.log(req.body);
            res.json(uploadedFiles);
        });
    }
};