/// <reference path="lib/jquery.d.ts" />
function filterRows(value: string){
    $('.name-col-filterable').filter(function () {
        return !($(this).text().toString().toLowerCase().includes(value));
    }).closest('tr').hide();
    $('.name-col-filterable').filter(function () {
        return $(this).text().toString().toLowerCase().includes(value);
    }).closest('tr').show();
}