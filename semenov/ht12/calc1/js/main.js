function calc (fValue, sValue, operation) {
	var res;
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
	return res;
}
//document.getElementById('calculate').addEventListener("click", getter); /*doesn't work*/
console.log(document.getElementById('calculate')); /*output in console is null*/
function getter () {
	var first = document.getElementById('first-value').value;
	var second = document.getElementById('second-value').value;
	var oper = '*';
	var result = calc(first, second, oper);
}
console.log(calc(5, 10, '*'));
