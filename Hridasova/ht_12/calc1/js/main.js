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
	var inputRes = document.getElementById('result');
	var container = document.getElementById('container');
	var btnCalc = byClass('btn-calc', container)[0];
	var calcResult, href, operator;
	
/*я пробовала остановиться на выборе имя узла <a>, записать в переменную  аттрибут href ->href = e.target.getAttribute('href'),
и начав цикл перебора i < href.length делать сразу вычисления свичем, записывая рез-т в переменную.
а потом результат записывать в текстовый инпут по нажатию ссылки btn-calc
 т.е. вычисления происходили бы при нажатии на ссылку с оператором, а при нажатии на ссылку calculate опубликовывался бы результат, это возможно?*/
	document.getElementById('operators').addEventListener('click', function(e) {
		e.preventDefault();		
		if(e.target && e.target.nodeName == 'a') {
			operator = e.target.className.split(' ');//насколько я понимаю эта строка должна собирать все имена кдассов тегов <a> в массив,разделяя их пробелом..?
			if(operator) {								
				for(var i = 0; i < operator.length; i++) {
					if(operator[i] == 'operator') {
						operator[i].style.border = '1px solid green';
						href = operator[i].getAttribute('href');
					}
				}
			}
		}
	});
	
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
	});
}


if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
