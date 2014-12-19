var links = document.getElementById('operators').getElementsByTagName('a');
var i, j,
max = links.length,
operation;
for (i = 0; i < max; i++) {	
	links[i].onclick = function(e) {
		for (j = 0; j < max; j++){
			links[j].removeAttribute("style");
		}
		e.preventDefault();
		operation = this.innerHTML; /* не совсем понял как это работает*/
		this.setAttribute("style", "border-color: black");
	}
}
document.getElementById('calculate').addEventListener("click", function () {
	var res,
	fValue = parseInt(document.getElementById('first-value').value, 10),
	sValue = parseInt(document.getElementById('second-value').value, 10);	
	switch (operation) {
		case '+':
			res = fValue + sValue;
			break;
		case '-':
			res = fValue - sValue;
			break;
		case '*':
			res = fValue * sValue;
			break;
		case '/':
			res = fValue / sValue;
			break;
		default:
			res = 'Select an Operation';
	}
	document.getElementById('result').setAttribute("value", res);		
});	