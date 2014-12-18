var links = document.getElementById('operators').getElementsByTagName('a');
var i, 
max = links.length,
oper;
links[0].addEventListener("click", function () {
	links[0].setAttribute("style", "border-color: black");
	oper = links[0].getAttribute('href');
	links[1].removeAttribute("style");
	links[2].removeAttribute("style");
	links[3].removeAttribute("style");	
});
links[1].addEventListener("click", function () {
	links[1].setAttribute("style", "border-color: black");
	oper = links[1].getAttribute('href');	
	links[0].removeAttribute("style");
	links[2].removeAttribute("style");
	links[3].removeAttribute("style");
});
links[2].addEventListener("click", function () {
	links[2].setAttribute("style", "border-color: black");
	oper = links[2].getAttribute('href');
	links[0].removeAttribute("style");
	links[1].removeAttribute("style");
	links[3].removeAttribute("style");
});
links[3].addEventListener("click", function () {
	links[3].setAttribute("style", "border-color: black");
	oper = links[3].getAttribute('href');
	links[0].removeAttribute("style");
	links[1].removeAttribute("style");
	links[2].removeAttribute("style");
});
document.getElementById('calculate').addEventListener("click", function () {
	var res,
	fValue = parseInt(document.getElementById('first-value').value, 10),
	sValue = parseInt(document.getElementById('second-value').value, 10),
	operation = oper;
	
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