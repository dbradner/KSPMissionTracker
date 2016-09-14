/**
 * Copyright (c) 2016 Daniel Bradner
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software
 * and associated documentation files (the "Software"),
 * to deal in the Software without restriction,
 * including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to
 * whom the Software is furnished to do so, subject to the
 * following conditions:
 *
 * The above copyright notice and this permission notice
 * shall be included in all copies or substantial portions
 * of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var IndexUiAction = function(){

    var _pageData = null;

    var initPage = function(tableElementClass) {
        var success = 0;
        var partial = 0;
        var fail = 0;
        var active = 0;
        var planning = 0;

        for (var count = 0; count < _pageData.length; count++) {
            var row = document.createElement("tr");
            var numberCell = document.createElement("td");
            var nameCell = document.createElement("td");
            var dateCell = document.createElement("td");
            var otherCell = document.createElement("td");

            $(numberCell).html(count+1);
            $(row).append(numberCell);

            $(nameCell).html(_pageData[count].missionname);
            $(row).append(nameCell);

            $(dateCell).html(moment(_pageData[count].modified).format("HH:MM:SS M/D/YY"));
            $(row).append(dateCell);

            $(otherCell).html("N/A for now.");
            $(row).append(otherCell);

            $(tableElementClass).append(row);

            if (_pageData[count].currentstate === 1){
                success++;
            }
            else if (_pageData[count].currentstate === 2){
                partial++;
            }
            else if (_pageData[count].currentstate === 3){
                fail++;
            }
            else if (_pageData[count].currentstate === 4){
                active++;
            }
            else {
                planning++;
            }
        }

        $(".success-badge").html(success);
        $(".partialSuccess-badge").html(partial);
        $(".failure-badge").html(fail);
        $(".active-badge").html(active);
        $(".planning-badge").html(planning);
    };

    var setPageData = function (data) {
        _pageData = data;
    };

    var filterRows =function (value) {
        $(constants.FILTERABLE_COL_SELECTOR).filter(function () {
            return !($(this).text().toString().toLowerCase().includes(value));
        }).closest("tr").hide();
        $(constants.FILTERABLE_COL_SELECTOR).filter(function () {
            return $(this).text().toString().toLowerCase().includes(value);
        }).closest("tr").show();
    };

    return {
        initPage : initPage,
        setPageData : setPageData,
        filterRows : filterRows
    };
}();
