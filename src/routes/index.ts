/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";
import {MissionManager} from "../repositories/MissionRepo";

module Route {

    export class Index {

        private static missionManager: MissionManager;

        constructor() {
            Index.initIndex();
        }

        public static initIndex() {
            this.missionManager = new MissionManager();
            this.missionManager.storageManager.sequelize.authenticate();
        }

        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            Index.initIndex();
            var missions = Index.missionManager.getAllMissions().then( function (response: any) {
                console.log(response[1].getDataValue("missionname"));
            });
            // res.json(Index.missionManager.getAllMissions());
            res.render("index");

        }

        public testAdd(req: express.Request, res: express.Response, next: express.NextFunction) {
            console.log("Route reached!");
            Index.missionManager = new MissionManager();
            Index.missionManager.storageManager.sequelize.authenticate()
                .then(function () {
                    console.log("Connection has been established successfully.");
                })
                .catch(function (err: JSON) {
                    console.log("Unable to connect to the database:", err);
                });
            Index.missionManager.addMission("testing12346", 1);
        }
    }
}

export = Route;
