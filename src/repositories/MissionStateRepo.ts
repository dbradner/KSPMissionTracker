/**
 * Created by Daniel on 9/14/2016.
 */

/// <reference path="../_all.d.ts" />

"use strict";
import {IMissionStateRepo} from "./IMissionStateRepo";
import {IMissionStateModel} from "./IMissionStateRepo";

//TODO route and use
export class MissionStateManager implements IMissionStateRepo {

    public missionState: IMissionStateModel;

    getMissionState(missionStateId: number) {
        return this.missionState.find({
            where: {id: missionStateId}
        });
    }
}
