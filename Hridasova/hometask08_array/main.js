var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
    var table = [];
    for (var i = 0; i < size; i++) {
	table [i] = [];
	for (var j = 0; j < size; j++) {
	table [i][j] = (i+1) * (j+1);
	}
	}
    return table;
}

function matrix (size) {
    var matrix = [];
    for (var i = 0; i < size;i++) {
	matrix [i] = [];
	for (var j = 0; j < size;j++) {
	if ( i < 5) {
	matrix [i][j] = [03] * [1];
	if (i == j) { matrix [i][j] = [01] * [1];}
	if (i + j == 9) {matrix [i][j] = [02] * [1];}
	if (i + j >= 10) {matrix [i][j] = [02] * [2];}
	if (i > j) {matrix [i][j] = [03] * [2];}
	} else if ( i > 4) {
	matrix [i][j] = [05] * [1];
	if (i == j) { matrix [i][j] = [01] * [1];}
	if (i + j == 9) {matrix [i][j] = [02] *[1];}
	if (i + j <= 8) {matrix [i][j] = [02] * [3];}
	if (i < j) {matrix [i][j] = [02] * [2];}
	}
	}
	}
    return matrix;
}

function pascal (size) {
    var triangle = [];
    for (var i = 0; i < size; i++) {
	triangle [i] = [];
	for (var j = 0; j < size; j++) {
	if (j == 0 || i == j) {
	triangle [i][j] = 1;
	} else if (i > j) {
	triangle [i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
	
	}
	}
	}
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