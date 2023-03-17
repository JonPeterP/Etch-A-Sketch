/* Test push */

var divs;
var column;
var row;
function createDivGrid(s) {
    var gridSize = s;
    w = 960 / gridSize;

    w = w + "px";

    var grid = document.createElement('div');
    grid.className = "grid";
    for (var i = 0; i < gridSize; i++) {
        var column = document.createElement('div');
        column.className = 'column';

        for (var j = 0; j < gridSize; j++) {
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


const txtInSize = document.querySelector('.inputSize');
const btnUpdate = document.querySelector('.btnUpdate');
const btnClear = document.querySelector('.btnClear');

function updateRows() {
    const rowsDiv = document.querySelectorAll('.row');
    rowsDiv.forEach(row => row.addEventListener('mouseover', function onDivMouseHover(e) {
        const list = row.classList;
        
            list.add('hovered');
        
    }));

}



btnUpdate.addEventListener('click', function () {
    var size = parseInt(txtInSize.value);
    console.log(size);
    var regex = /^[0-9]+$/;
    if (size < 20 || size >= 100 || !txtInSize.value.match(regex) || txtInSize.value == null) {
        alert("Please enter size between 20 and 100");
        return;
    }
    var currGrid = document.querySelector('.grid');
    document.body.removeChild(currGrid);
    createDivGrid(size);
    updateRows();
});

btnClear.addEventListener('click', function(){
    updateRows()
});


createDivGrid(20);

updateRows();




