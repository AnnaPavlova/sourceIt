var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
    var table = [];
    var i, j, row;
	
	for(i = 1; i <= size; i++){
		row = [];
		for(j = 1; j <= size; j++){
			row.push(i* j);
		}
		
		table.push(row);
	}
	
    return table;
}

function matrix (size) {
    var matrix = [];
    // @todo
    return matrix;
}

function pascal (size) {
    var triangle = [];
    // @todo
    return triangle;
}

function render (array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }
    return result.join('');
}