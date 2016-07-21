/// <reference path="../_all.d.ts" />

"use strict";

import * as Sequelize from "sequelize";
import {IMissionStateAttribute} from "./IMissionStateRepo";

export interface IMissionAttribute {
    id?: number;
    missionname?: string;
    currentstate?: number;
    created?: string;
    modified?: string;
    createdby?: string;
    modifiedby?: string;
}

export interface IMissionInstance extends Sequelize.Instance<IMissionAttribute, IMissionAttribute> {
    setMissionStatus: Sequelize.BelongsToSetAssociationMixin<IMissionStateAttribute, number>;
}

export interface IMissionModel extends Sequelize.Model<IMissionInstance, IMissionAttribute> {

}

export interface IMissionRepo {
    addMission(aName: string, aStatus: number);
    editMission(aName: string, aStatus: number);
    deleteMission(aName: string);
    getAllMissions();
    getMissionsByName(aName: string);
    getMissionsByStatus(aStatus: number);
}
