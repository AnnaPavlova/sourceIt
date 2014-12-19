// page init
function initPage() {
	initAnimation(500)
	initAnimation2(500);
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

//animation function init
function initAnimation(newWidth){
	var container = document.getElementById('container');
	var element = byClass('box', container)[0];
	var btnStart = byClass('start', container)[0];
	var btnStop = byClass('stop', container)[0];
	var elementWidth = element.offsetWidth;
	var index;
	
	function startAnim() {
		if (elementWidth < newWidth){
			index = setTimeout(function() {
				elementWidth += 1;
				element.style.width = elementWidth + "px";
				startAnim();
			}, 10);
		
		}
	}
	
	btnStart.addEventListener('click', startAnim);
	
	btnStop.addEventListener('click', function(){
		clearTimeout(index);
	});
}

//animation2 function init
function initAnimation(newWidth){
	var container2 = document.getElementById('container2');
	var element = byClass('box', container2)[0];
	var btnGo = byClass('go', container2)[0];
	var btnStop = byClass('stop', container2)[0];
	var btnBack = byClass('back', container2)[0];
	var elementWidth = element.offsetWidth;
	var index;
	
	function goAnim2() {
		if (elementWidth < newWidth){
			index = setTimeout(function() {
				elementWidth += 1;
				element.style.width = elementWidth + "px";
				goAnim2();
			}, 10);
		
		}
	}
	function startAnimBack() {
		if (elementWidth > 150){
			index = setTimeout(function() {
				elementWidth -= 1;
				element.style.width = elementWidth + "px";
				startAnimBack();
			}, 10);
		
		}
	}
	
	btnGo.addEventListener('click', goAnim2);
	
	btnStop.addEventListener('click', function(){
		clearTimeout(index);
	});
	
	btnBack.addEventListener('click', startAnimBack);
}

if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
