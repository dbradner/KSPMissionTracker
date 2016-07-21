/// <reference path="../_all.d.ts" />

"use strict";

import {IMissionModel, IMissionRepo} from "./IMissionRepo";
import {SeqelizeStorageManager} from "./storageManager";
import {KSPMissionTrackerConfig} from "../config";
import * as Sequelize from "sequelize";
import * as moment from "moment";

export class MissionManager implements IMissionRepo {
    public mission: IMissionModel;
    public storageManager: SeqelizeStorageManager;

    constructor() {
        this.storageManager = new SeqelizeStorageManager(KSPMissionTrackerConfig.KSP_MISSION_TRACKER_CONFIG);
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
            },
            {
                "tableName": "missions",
                "timestamps": true,
                "createdAt": "created",
                "updatedAt": "modified",
            });
    }

    addMission(aName: string, aStatus: number) {
        return this.mission.create({
            missionname: aName,
            currentstate: aStatus,
            created: moment().toString()
        });
    }

    editMission(aName: string, aStatus: number) {
        return this.mission.update({
                currentstate: aStatus
            },
            {
                fields: ["currentstate"],
                where: {name: aName}
            });
    }

    deleteMission(aName: string) {
        return this.mission.destroy({
            where: {name: aName}
        });
    }

    getAllMissions() {
        return this.mission.findAll({
        });
    }

    getMissionsByName(aName: string) {
        return this.mission.find({
            where: {name: aName}
        });
    }

    getMissionsByStatus(aStatus: number) {
        return this.mission.findAll({
            where: {currentstate: aStatus}
        });
    }
}
