/// <reference path="../../_all.d.ts" />

"use strict";

import {globalConstants} from "./constants";

export class IndexUiAction {

    private static pageData = null;

    public constructor() {
        // TODO Do nothing for now, maybe remove.
    }

    public static initPage(tableElementClass : string) {
        for (var count : number = 0; count < this.pageData.length; count++) {
            var row : any = document.createElement(globalConstants.DOM_ROW);
            row.append(globalConstants.DOM_CELL).html(this.pageData[count].missionname);
            $(tableElementClass).append(row);
        }
    }

    public static setPageData(data: any) {
        this.pageData = data;
    }

    public static filterRows(value: string) {
        $(".name-col-filterable").filter(function () {
            return !($(this).text().toString().toLowerCase().includes(value));
        }).closest("tr").hide();
        $(".name-col-filterable").filter(function () {
            return $(this).text().toString().toLowerCase().includes(value);
        }).closest("tr").show();
    };
}
