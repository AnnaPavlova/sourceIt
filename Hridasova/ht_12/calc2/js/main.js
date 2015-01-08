function initPage() {
	calculation();
}

function byClass(classList, node) {
 if(document.getElementsByClassName) {
  return (node || document).getElementsByClassName(classList);
 }
 else {
  var node = node || document,
  list = node.getElementsByTagName('*'),
  length = list.length,
  classArray = classList.split(/\s+/),
  classes = classArray.length,
  result = [], i,j;
  for(i = 0; i < length; i++) {
   for(j = 0; j < classes; j++)  {
    if(list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
     result.push(list[i]);
     break;
    }
   }
  }
  return result;
 }
}


function calculation() {
	var container = document.getElementById('container');
	var btnCalc = byClass('btn-calc', container)[0];
	var operator = byClass('operator', container);
	var calcResult, href;
	var inputRes = document.getElementById('result');
	
	for(var i = 0; i < operator.length; i++){
		operator[i].addEventListener('click', function(e) {
			e.preventDefault();
			href = this.getAttribute('href');
			this.style.border = '1px solid green';
		});
		
	}
	btnCalc.addEventListener('click', function() {
		var firstValue = parseInt(document.getElementById('first-value').value, 10);
		var secondValue = parseInt(document.getElementById('second-value').value, 10);
			switch(href) {
				case '+':
					calcResult = firstValue + secondValue;		
					break;
				case '-':
					calcResult = firstValue - secondValue;
					break;
				case '*':
					calcResult = firstValue * secondValue;
					break;
				case '/':
					calcResult = firstValue / secondValue;
					break;
				default:
					calcResult = 'no method chosen';
			}
			inputRes.value = calcResult;
	});
	
		
	console.log('hello');
}


if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
