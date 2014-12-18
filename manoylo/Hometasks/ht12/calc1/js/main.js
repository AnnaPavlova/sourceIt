//@ todo

//page init
function initPage() {
	initCalc()
}

//function for cross browser search by class
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
var sign;
function initCalc(){
	var container = document.getElementById('container');
	var calcBtn = byClass('btn-calc', container)[0];
	var element = byClass('operator', container);
	var i;
	
	
	for(i = 0; i < element.length; i++ ){
		element[i].onclick = function(e){
			e.preventDefault()
			sign = this.innerHTML;
			this.style.border = "1px solid green"
		}
	}
	
	calcBtn.addEventListener('click', calc);
}

function calc(){
	var firstValue = parseInt(document.getElementById("first-value").value);
	var secondValue = parseInt(document.getElementById("second-value").value);
	//var result =  firstValue sign secondValue;

	console.log(result);
}

if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);