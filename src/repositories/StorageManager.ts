/// <reference path="../_all.d.ts" />

"use strict";

import * as Sequelize from "sequelize";
import {IStorageManager, ISequelizeStorageConfig} from "./IStorageManager";

export class SeqelizeStorageManager implements IStorageManager {
    public sequelize;

    private config: ISequelizeStorageConfig;

    constructor(config: ISequelizeStorageConfig) {
        this.config = config;

        this.sequelize = new Sequelize(this.config.database, this.config.username, this.config.password, {dialect: "postgres"});
    }

    init(force?: boolean): Promise<any> {
        force = force || false;
        // TODO: LOGGING
        return this.sequelize.sync({force: force, logging: false});
    }
}
