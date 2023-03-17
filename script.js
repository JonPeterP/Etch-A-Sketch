/* Test push */

var divs;
var rows = 16;
var columns = 16;

function createDivGrid(w) {

    w = w + "px";
    var grid = document.createElement('div');
    grid.className = "grid";
    for (var i = 0; i < columns; i++) {
        var column = document.createElement('div');
        column.className = 'column';

        for (var j = 0; j < rows; j++) {
            var row = document.createElement('div');
            row.className = 'row';
            row.style.width = w;
            row.style.height = w;
            //row.textContent = i + '-' + j; // set text
        
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column);
    }

    document.body.appendChild(grid);

}


var rowWidth;



createDivGrid(60);

const rowsDiv = document.querySelectorAll('.row');
rowsDiv.forEach(row => row.addEventListener('mouseover', function onDivMouseHover(e) {
    const list = row.classList;

    list.add('hovered');

}));

