(function(){
	var arr = [1,2,[3,4,[6,7,8],9],10,11];
	var n = 1;
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
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
		
			var list = document.getElementById("list");
			var ul = document.createElement("ul");	
			var li;
		
			for (var i = 0; i < data.length; i++) {
				if (typeof data[i] == "number") {
					li = document.createElement("li");
					li.appendChild(document.createTextNode(data[i]));
					ul.appendChild(li);
				} else {
					li = document.createElement("li");
					ul.appendChild(li);
					var innerUl = document.createElement("ul");
					li.appendChild(innerUl);	
					recursiveList(data[i]);
					console.log(data[i]);
				}
			}
			list.appendChild(ul);
        return list;
    }

    function recursiveHeadings (data, weight) {
		var k =	document.getElementById("headings");
		for (var i = 0; i < data.length; i++) {
				if (typeof data[i] == "number") {
					var para = document.createElement("h" + weight);
					var node = document.createTextNode(data[i]);
					para.appendChild(node);
					k.appendChild(para);
				} else {					
					recursiveHeadings(data[i], weight + 1);
				}
			}
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
		
		var input = document.getElementsByTagName("input");
		var i;
		document.getElementsByType("submit").addEventListener("click", validator);
		alert(input[0]);
		function validator () {
			alert("Hello");
			/*for (i = 0, var max = input.length; i < max; i++) {
				if (document.getElementByTagName("input")[i].value;) {
					
				}
			}*/
		}
		
    }
	
	//вызывать функции здесь!
    sortHandler();
	recursiveList(arr);
	recursiveHeadings(arr, n);
	simpleValidation(form);
})();