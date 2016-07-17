/// <reference path="../_all.d.ts" />
"use strict";
var Route;
(function (Route) {
    var AddMission = (function () {
        function AddMission() {
        }
        AddMission.prototype.addMission = function (req, res, next) {
            // render page
            res.render("addMission");
        };
        return AddMission;
    }());
    Route.AddMission = AddMission;
})(Route || (Route = {}));
module.exports = Route;
//# sourceMappingURL=addMission.js.map