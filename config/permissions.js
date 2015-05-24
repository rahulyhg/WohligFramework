// config/permissions.js

var _ = require('lodash');
var _super = require('sails-permissions/config/permissions');

_.merge(exports, _super);
_.merge(exports, {

    // Extend with custom logic here by adding additional fields, methods, etc.

    /**
     * For example:
     *
     * foo: function (bar) {
     *   bar.x = 1;
     *   bar.y = 2;
     *   return _super.foo(bar);
     * }
     */
});


module.exports.models = {

    adminEmail: "admin@example.com",
    adminUsername: "admin",
    adminPassword: "admin1234"

};