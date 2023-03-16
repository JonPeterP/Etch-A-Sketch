/* Test push */

var divs;
var rows = 16;
var columns = 16;

function createDivGrid(){

    var grid = document.createElement('div');
    grid.className = "grid";
    for (var i = 0; i < columns; i++){
        var column = document.createElement('div');
        column.className = 'column';
        
        for(var j = 0; j < rows; j++){
            var row = document.createElement('div');
            row.className = 'row';
            row.textContent = i + '-' +j; // set text

            column.appendChild(row); // append row in column
        }
        grid.appendChild(column);
    }

    document.body.appendChild(grid);

}



createDivGrid();