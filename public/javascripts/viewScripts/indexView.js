/**
 * Created by Daniel on 6/16/2016.
 */
/// <reference path="../../../node_modules/definitely-typed-jquery/jquery.d.ts" />
var UIAction = new function () {
    this.toggleAllRowsOfType = function (rowType, btnType) {
        if ($(rowType).is(':visible')) {
            $(rowType).hide();
            $(btnType).text('Hidden!');
        }
        else {
            $(rowType).show();
            $(btnType).text('15');
        }
    };
};
//# sourceMappingURL=indexView.js.map