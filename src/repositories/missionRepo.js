/// <reference path="../_all.d.ts" />
"use strict";
var storageManager_1 = require("./storageManager");
var config_1 = require("../config");
var sequelize = require("~sequelize/index");
var MissionManager = (function () {
    function MissionManager() {
        this.storageManager = new storageManager_1.SeqelizeStorageManager(config_1.KSPMissionTrackerConfig.KSP_MISSION_TRACKER_CONFIG);
        this.mission = this.storageManager.sequelize.define("mission", {
            "id": {
                "type": sequelize.INTEGER,
                "allowNull": false,
                "primaryKey": true
            },
            "currentstate": {
                "type": sequelize.INTEGER
            },
            "missionname": {
                "type": sequelize.STRING(255)
            },
            "created": {
                "type": sequelize.DATE
            },
            "modified": {
                "type": sequelize.DATE
            },
            "createdby": {
                "type": sequelize.STRING(30)
            },
            "modifiedby": {
                "type": sequelize.STRING(30)
            }
        }, {
            "tableName": "missions",
            "timestamps": true,
            "createdAt": "created",
            "updatedAt": "modified"
        });
    }
    MissionManager.prototype.addMission = function (aName, aStatus) {
        // TODO
    };
    MissionManager.prototype.editMission = function (aName, aStatus) {
        // TODO
    };
    MissionManager.prototype.deleteMission = function (aName) {
        // TODO
    };
    MissionManager.prototype.getAllMissions = function () {
        // TODO
    };
    MissionManager.prototype.getMissionsByName = function (aName) {
        // TODO
    };
    MissionManager.prototype.getMissionsByStatus = function (aStatus) {
        // TODO
    };
    return MissionManager;
}());
exports.MissionManager = MissionManager;
//# sourceMappingURL=missionRepo.js.map