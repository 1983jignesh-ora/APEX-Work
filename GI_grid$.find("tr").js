var region = apex.region("QUOTE_LINE");
var gridView = region.call("getViews", "grid");
var grid$ = gridView.view$; /
grid$.find("tr").each(function() {
        var $tr = $(this); // This is the current row

        // Now access each column in this row, one by one
        // Example: Reading column 1 (index 0), column 2 (index 1), and so on

        // Example: Read the first column (index 0)
        var column1Value = $tr.find("td[role='gridcell']").eq(0).text();
        console.log("Column 1 Value: " + column1Value);

        // Example: Read the second column (index 1)
        var column2Value = $tr.find("td[role='gridcell']").eq(1).text();
        console.log("Column 2 Value: " + column2Value);

        // Continue for additional columns as needed
        // var column3Value = $tr.find("td[role='gridcell']").eq(2).text();
        // console.log("Column 3 Value: " + column3Value);
    }); 