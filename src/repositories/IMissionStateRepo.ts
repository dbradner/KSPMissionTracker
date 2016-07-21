/// <reference path="../_all.d.ts" />

"use strict";

import * as Sequelize from "sequelize";

export interface IMissionStateAttribute {
    id: string;
    state: string;
}

export interface IMissionStateInstance extends Sequelize.Instance<IMissionStateAttribute, IMissionStateAttribute> {
    setMissionStatus: Sequelize.BelongsToSetAssociationMixin<IMissionStateAttribute, number>;
}

export interface IMissonStateModel extends Sequelize.Model<IMissionStateInstance, IMissionStateAttribute> {

}
