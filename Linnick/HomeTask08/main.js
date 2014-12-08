var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));
	// двухмерный массив , вложеный цикл
function multiplicationTable(size) {
	var table = [];		// создаем массив
	var i;				
	var j;

	for (i = 0; i < 10; i++){  // каждая итерация будет создавать массив с индексом i	
		table[i] = [];	
			
			for (j = 0; j < 10; j++){	// внутрений цикл
			table[i][j] = ((i + 1) * (j + 1)) //каждая итерация будет запонять двойной индекс ячейки
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
    var i;				
	var j;
	
	for (i = 0; i < 10; i++){
	triangle[i] = [];
	triangle[i][0]= 1;

			for (j = 1; j <= i; j++){
				if (j == i){
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
/*alert("Test");
function pascal (size) {
    var triangle = [];
    var i;				
	var j;
	
	for (i = 0; i < 9; i++){
	triangle[i] = [];
	triangle[i][0]= 1;
			for (j = 1; j <= i; j++){
			triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
			}
		triangle[i][j] = 1;
		
	}
    return triangle;
}*/