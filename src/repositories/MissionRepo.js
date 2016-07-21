/// <reference path="../_all.d.ts" />
"use strict";
var storageManager_1 = require("./storageManager");
var config_1 = require("../config");
var Sequelize = require("sequelize");
var moment = require("moment");
var MissionManager = (function () {
    function MissionManager() {
        this.storageManager = new storageManager_1.SeqelizeStorageManager(config_1.KSPMissionTrackerConfig.KSP_MISSION_TRACKER_CONFIG);
        this.mission = this.storageManager.sequelize.define("mission", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            currentstate: {
                type: Sequelize.INTEGER
            },
            missionname: {
                type: Sequelize.STRING(255)
            },
            created: {
                type: Sequelize.DATE
            },
            modified: {
                type: Sequelize.DATE
            },
            createdby: {
                type: Sequelize.STRING(30)
            },
            modifiedby: {
                type: Sequelize.STRING(30)
            }
        }, {
            "tableName": "missions",
            "timestamps": true,
            "createdAt": "created",
            "updatedAt": "modified",
        });
    }
    MissionManager.prototype.addMission = function (aName, aStatus) {
        return this.mission.create({
            missionname: aName,
            currentstate: aStatus,
            created: moment().toString()
        });
    };
    MissionManager.prototype.editMission = function (aName, aStatus) {
        return this.mission.update({
            currentstate: aStatus
        }, {
            fields: ["currentstate"],
            where: { name: aName }
        });
    };
    MissionManager.prototype.deleteMission = function (aName) {
        return this.mission.destroy({
            where: { name: aName }
        });
    };
    MissionManager.prototype.getAllMissions = function () {
        return this.mission.findAll({});
    };
    MissionManager.prototype.getMissionsByName = function (aName) {
        return this.mission.find({
            where: { name: aName }
        });
    };
    MissionManager.prototype.getMissionsByStatus = function (aStatus) {
        return this.mission.findAll({
            where: { currentstate: aStatus }
        });
    };
    return MissionManager;
}());
exports.MissionManager = MissionManager;
//# sourceMappingURL=MissionRepo.js.map