/// <reference path="../../_all.d.ts" />

"use strict";

import {globalConstants} from "./constants";

export class IndexUiAction {

    private pageData = null;

    public constructor(data: any) {
        this.pageData = data;
    }

    public initPage(tableElementClass : string) {
        for (var count : number = 0; count < this.pageData.length; count++) {
            var row : any = document.createElement(globalConstants.DOM_ROW);
            row.append(globalConstants.DOM_CELL).html(this.pageData[count].missionname);
            $(tableElementClass).append(row);
        }
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
