/// <reference path="../../_all.d.ts" />
"use strict";
var constants_1 = require("./constants");
var IndexUiAction = (function () {
    function IndexUiAction(data) {
        this.pageData = null;
        this.pageData = data;
    }
    IndexUiAction.prototype.initPage = function (tableElementClass) {
        for (var count = 0; count < this.pageData.length; count++) {
            var row = document.createElement(constants_1.globalConstants.DOM_ROW);
            row.append(constants_1.globalConstants.DOM_CELL).html(this.pageData[count].missionname);
            $(tableElementClass).append(row);
        }
    };
    IndexUiAction.filterRows = function (value) {
        $(".name-col-filterable").filter(function () {
            return !($(this).text().toString().toLowerCase().includes(value));
        }).closest("tr").hide();
        $(".name-col-filterable").filter(function () {
            return $(this).text().toString().toLowerCase().includes(value);
        }).closest("tr").show();
    };
    ;
    return IndexUiAction;
}());
exports.IndexUiAction = IndexUiAction;
//# sourceMappingURL=indexView.js.map