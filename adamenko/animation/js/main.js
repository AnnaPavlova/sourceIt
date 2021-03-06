// page init
function initPage() {
	initAnimation(500);
	initAnimation2(500);
    initAnimation3(500);
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
function initAnimation2(newWidth){

    var container = document.getElementById('container2');
    var element = byClass('box', container)[0];
    var btnStart = byClass('go', container)[0];
    var btnStop = byClass('stop', container)[0];
    var btnBack = byClass('back', container)[0];
    var elementWidth = element.offsetWidth;
    var defaultWidth = 150;
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

    function backAnim() {
        for (elementWidth; elementWidth > defaultWidth; elementWidth--){
            index = setTimeout(function() {
                element.style.width = elementWidth + "px";
                backAnim();
            }, 10);
        };

    }



    btnStart.addEventListener('click', startAnim);

    btnStop.addEventListener('click', function(){
        clearTimeout(index);
    });

    btnBack.addEventListener('click', backAnim);

}

//animation3 function init
function initAnimation3(newWidth){

    var container = document.getElementById('container3');
    var element = byClass('box', container)[0];
    var btnStart = byClass('go', container)[0];
    var btnStop = byClass('stop', container)[0];
    var btnBack = byClass('back', container)[0];
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

    function backAnim() {
        index = setTimeout(function() {
            elementWidth -= 1;
            element.style.width = elementWidth + "px";
            backAnim();
        }, 10);

    }



    btnStart.addEventListener('click', startAnim);

    btnStop.addEventListener('click', function(){
        clearTimeout(index);
    });

    btnBack.addEventListener('click', backAnim);

}

if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
// ***