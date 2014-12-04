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
		
		for (i = 0; i < size; i++) {
			table[i] = [];
			
			for (j = 0; j < size; j++){			
				table[i][j] = ((i + 1) * (j + 1));
			}		
			
		}
    return table;
}

function matrix (size) {
			var matrix = [];
			var i;
			var j;
			
			for (i = 0; i <size; i++) {
				matrix[i] = [];
			
				for (j = 0; j < size; j++) {
					if (j === i) {
						matrix[i][j] = 1;
						
					} else if (j === (size - 1 - i)) {
						matrix[i][j] = 2;
						
					} else if (j > i && j < (size - 1 - i)){
						matrix[i][j] = 3;
						
					} else if (j < i && j < (size - 1 - i)){
						matrix[i][j] = 6;
						
					} else if (j < i && j > (size - i - 1)){
						matrix[i][j] = 5;
						
					} else {
						matrix[i][j] = 4;
					}
				}
			}
		
    return matrix;
}

function pascal (size) {
    var triangle = [];
    var i;
	var j;	
		
		for (i = 0; i < size; i++) {
			triangle[i] = [];
			
			for (j = 0; j <= i; j++){		
				if (j == 0 || j === i){
					triangle[i][j] = 1;
					
				} else {				
				triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
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