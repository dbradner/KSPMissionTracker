/// <reference path="../_all.d.ts" />

"use strict";

export interface ISequelizeStorageConfig {
    database: string;
    username: string;
    password: string;
}

export interface IStorageManager {
    init(force?: boolean): Promise<any>;
}
