(function(){	
	var i, n = 1;
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    function recursiveList (data) {
		var list = document.createElement('ul');
			for (var i = 0; i < data.length; i++) {
					var li = document.createElement("li");					
				if (typeof data[i] == "number") {	
					li.innerHTML = data[i];
				} else {
					li.appendChild(recursiveList(data[i]));			
				}
				list.appendChild(li);
			}
        return list;
    }
		var arr = [1,2,[3,4,[6,7,8],9],10,11];
		var listHolder = document.getElementById("list");
		listHolder.appendChild(recursiveList(arr));

    function recursiveHeadings (data, weight) {
		var k =	document.getElementById("headings");
		var max = data.length;
		for (i = 0; i < max; i++) {
				if (typeof data[i] == "number") {
					var para = document.createElement("h" + weight);
					var node = document.createTextNode(data[i]);
					para.appendChild(node);
					k.appendChild(para);
				} else {					
					recursiveHeadings(data[i], weight + 1);
					var para = document.createElement("h" + weight);
					var node = document.createTextNode(data[i]);
					para.appendChild(node);
					k.appendChild(para);
				}
			}
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
		
		var input = document.getElementsByTagName("input");
		var max = input.length;		
		document.getElementById("submit").addEventListener("click", validator);		
		function validator (ev) {
			ev.preventDefault();
			var v = 0;
			for (i = 0; i < max; i++) {
				if (input[i].value) {
					input[i].removeAttribute("style");
					v++;
				} else {
					input[i].setAttribute("style", "border-color: #ff0000");
					
				}
			}
			if (v === max) {
				for (i = 0; i < max; i++) {
					document.getElementsByTagName("input")[i].removeAttribute("style");
				}
				alert ("All OK!");
			}
		}		
    }
	
	//вызывать функции здесь!
    sortHandler();
	recursiveHeadings(arr, n);
	simpleValidation(document.getElementById('form'));
})();