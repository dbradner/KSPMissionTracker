/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

module Route {

    export class DeleteMission {

        public deleteMission(req: express.Request, res: express.Response, next: express.NextFunction) {
            //render page
            res.render("deleteMission");
        }
    }
}

export = Route;
