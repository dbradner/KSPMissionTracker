/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";
import {MissionManager} from "../repositories/missionRepo";

module Route {

    export class Index {

        private missionManager: MissionManager;

        constructor(missionManager: MissionManager){
            this.missionManager = missionManager;
        }

        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            // render page
            res.render("index");
        }

        public testAdd(req: express.Request, res: express.Response, next: express.NextFunction) {
            console.log( "Route reached!");
            this.missionManager = new MissionManager();
            this.missionManager.storageManager.sequelize.authenticate()
                .then(function(err) {
                    console.log("Connection has been established successfully.");
                })
                .catch(function (err) {
                    console.log("Unable to connect to the database:", err);
                });
            this.missionManager.addMission("testing12346", 1);
        }
    }
}

export = Route;
