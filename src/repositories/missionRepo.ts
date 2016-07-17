/// <reference path="../_all.d.ts" />

"use strict";

import {IMissionModel, IMissionRepo} from "./IMissionRepo";
import {SeqelizeStorageManager} from "./storageManager";
import {KSPMissionTrackerConfig} from "../config";
import sequelize = require("~sequelize/index");

export class MissionManager implements IMissionRepo {
    public mission: IMissionModel;
    public storageManager: SeqelizeStorageManager;

    constructor() {
        this.storageManager = new SeqelizeStorageManager(KSPMissionTrackerConfig.KSP_MISSION_TRACKER_CONFIG);
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
                "type" : sequelize.STRING(255)
            },
            "created": {
                "type" : sequelize.DATE
            },
            "modified": {
                "type" : sequelize.DATE
            },
            "createdby": {
                "type" : sequelize.STRING(30)
            },
            "modifiedby": {
                "type" : sequelize.STRING(30)
            }
        },
        {
            "tableName": "missions",
            "timestamps": true,
            "createdAt": "created",
            "updatedAt": "modified",
        });
    }

    addMission(aName: string, aStatus: number) {
        // TODO
    }

    editMission(aName: string, aStatus: number) {
        // TODO
    }

    deleteMission(aName: string) {
        // TODO
    }

    getAllMissions() {
        // TODO
    }

    getMissionsByName(aName: string) {
        // TODO
    }

    getMissionsByStatus(aStatus: number) {
        // TODO
    }
}
