var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
		var table = [];
		var i;
		var j;				
		
		for (i = 0; i < 10;i++) {
			table[i] = [];
			
			for (j = 0; j < 10; j++){			
				table[i][j] = ((i + 1) * (j + 1));
			}		
			
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