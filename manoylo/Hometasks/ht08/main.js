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
			row.push(i*j);
		}
		
		table.push(row);
	}
	
    return table;
}

function matrix (size) {
    var matrix = [];
	var val;
    
	for(var i = 0; i < size; i++){
		matrix[i] = [];
		
		for(var j = 0; j < size; j++){

			if (i == j) {
                val = 1;
            }

            else if( (size - i - 1) == j){
				val = 2;
			}
			
			else if(i < j && i < (size - j) ) {
				val = 3;
			}
			
			else if(i < j) {
				val = 4;
			}
			
			else if(i > j && (size - i) <= j){
				val = 5;
			}
			
			else if(i > j && (size - i) > j) {
				val = 6;
			}
			
			matrix[i][j] = val;
		}
	}
	
    return matrix;
}

function pascal (size) {
    var triangle = [];
    
	var val, a, b;
    for(var i = 0; i < size; i++){
		triangle[i] = [];

        for(var j = 0; j <= i; j++){
			triangle[i][j] = 1;
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