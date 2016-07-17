/**
 * Created by Daniel on 7/16/2016.
 */

/// <reference path="./_all.d.ts" />

"use strict";

import {ISequelizeStorageConfig} from "./repositories/IStorageManager";

class Config {
    public static DATABASE: string = "SOMETHING";
    public static USERNAME: string = "SOMETHINGELSE";
    public static PASSWORD: string = "SOMETHINGELSEELSE";
}

export class KSPMissionTrackerConfig {
    public static KSP_MISSION_TRACKER_CONFIG: ISequelizeStorageConfig = {database: Config.DATABASE,
        username: Config.USERNAME, password: Config.PASSWORD};
}
