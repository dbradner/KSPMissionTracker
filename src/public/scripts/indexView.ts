/// <reference path="../../_all.d.ts" />

"use strict";

// export class UIAction {

    function filterRows(value: string) {
        $(".name-col-filterable").filter(function () {
            return !($(this).text().toString().toLowerCase().includes(value));
        }).closest("tr").hide();
        $(".name-col-filterable").filter(function () {
            return $(this).text().toString().toLowerCase().includes(value);
        }).closest("tr").show();
    };
// }
