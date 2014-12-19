	function sum(a, b) {
		return (a + b);
	}
	window.onload = function () {
	var sumbtn = document.getElementById('sum');
	sumbtn.onclick = showSum;
	}
	function showSum() {
		var a = + document.getElementById('first-value').value;
		var b = + document.getElementById('second-value').value;
		var res = sum(a, b);
		var resultInput = document.getElementById('result');
		resultInput.value = res;
	}
	
		function min(a, b) {
		return (a - b);
	}
	window.onload = function () {
	var minbtn = document.getElementById('min');
	minbtn.onclick = showMin;
	}
	function showMin() {
		var a = + document.getElementById('first-value').value;
		var b = + document.getElementById('second-value').value;
		var res = min(a, b);
		var resultInput = document.getElementById('result');
		resultInput.value = res;
	}
		function mul(a, b) {
		return (a * b);
	}
	window.onload = function () {
	var mulbtn = document.getElementById('mul');
	mulbtn.onclick = showMul;
	}
	function showMul() {
		var a = + document.getElementById('first-value').value;
		var b = + document.getElementById('second-value').value;
		var res = mul(a, b);
		var resultInput = document.getElementById('result');
		resultInput.value = res;
	}
		function div(a, b) {
		return (a / b);
	}
	window.onload = function () {
	var divbtn = document.getElementById('div');
	divbtn.onclick = showDiv;
	}
	function showDiv() {
		var a = + document.getElementById('first-value').value;
		var b = + document.getElementById('second-value').value;
		var res = div(a, b);
		var resultInput = document.getElementById('result');
		resultInput.value = res;
	}
	
		