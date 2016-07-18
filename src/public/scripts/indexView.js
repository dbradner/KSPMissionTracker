/// <reference path="lib/jquery.d.ts" />
// export class UIAction {
function filterRows(value) {
    $(".name-col-filterable").filter(function () {
        return !($(this).text().toString().toLowerCase().includes(value));
    }).closest("tr").hide();
    $(".name-col-filterable").filter(function () {
        return $(this).text().toString().toLowerCase().includes(value);
    }).closest("tr").show();
}
;
// }
//# sourceMappingURL=indexView.js.map