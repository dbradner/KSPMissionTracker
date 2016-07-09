/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

module Route {

    export class Add {

        public add(req: express.Request, res: express.Response, next: express.NextFunction) {
            //render page
            res.render("add");
        }
    }
}

export = Route;
