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


function initPage() {
	var firstValue = parseInt(document.getElementById('first-value').value, 10);
	var secondValue = parseInt(document.getElementById('second-value').value, 10);
	var inputRes = document.getElementById('result').value;
	var btnCalc = byClass('btn-calc');
	var calcResult;
	document.getElementById('operators').addEventListener('click', function(e) {
		e.preventDefault();
		if(e.target && e.target.nodeName == 'a') {
			var href = e.target.getAttribute('href');
			for (var i = 0; i < href.length; i++) {
			switch(href[i]) {
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
			}
			
		}
	});
	
	btnCalc.onclick = function (calcRes) {
		calcRes = calcResult;
		calcRes.preventDefault();
		inputRes = calcRes;
	}
	
	console.log('hello');
}






if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
